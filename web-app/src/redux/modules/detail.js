//服務於頁面的redux模塊 含純應用的狀態維護
import { combineReducers } from "redux";
import url from "../../utils/url";
import { FETCH_DATA } from "../middleware/api";
import { schema as shopSchema, getShopById } from "./entities/shops";
import { schema as productSchema, getProductDetail, getProductById } from "./entities/products";

//兩組action透過調用後台api 來獲取對應領域實體數據
export const types = {
  // 獲取產品詳情
  FETCH_PRODUCT_DETAIL_REQUEST: "DETAIL/FETCH_PRODUCT_DETAIL_REQUEST",
  FETCH_PRODUCT_DETAIL_SUCCESS: "DETAIL/FETCH_PRODUCT_DETAIL_SUCCES",
  FETCH_PRODUCT_DETAIL_FAILURE: "DETAIL/FETCH_PRODUCT_DETAIL_FAILURE",
  // 獲取關聯商家訊息
  FETCH_SHOP_REQUEST: "DETAIL/FETCH_PRODUCT_DETAIL_REQUEST",
  FETCH_SHOP_SUCCESS: "DETAIL/FETCH_PRODUCT_DETAIL_SUCCES",
  FETCH_SHOP_FAILURE: "DETAIL/FETCH_PRODUCT_DETAIL_FAILURE"
};

//初始商品與店家狀態
const initialState = {
  product: {
    isFetching: false, //當前是否抓取資料中
    id: null
  },
  relatedShop: {
    isFetching: false, //當前是否抓取關聯店家的資料中
    id: null
  }
};

//有了actions後 定義具體的 actions creator
export const actions = {
  //獲取商品詳情
  loadProductDetail: id => {
    return (dispatch, getState) => {
      const product = getProductDetail(getState(), id);
      if (product) {
        //判斷是否資料存在再抓取 將當前的id更新到state中 
        return dispatch(fetchProductDetailSuccess(id));
      }
      const endpoint = url.getProductDetail(id); //  /mock/product_detail/m-1.json
      //有了url 借助redux middleware dispatch 發送異步action
      console.log( endpoint, dispatch(fetchProductDetail(endpoint, id)) );
      return dispatch(fetchProductDetail(endpoint, id));
    };
  },
  // 獲取店家訊息
  loadShopById: id => {
    return (dispatch, getState) => {
      const shop = getShopById(getState(), id);
      if (shop) {
        return dispatch(fetchShopSuccess(id));
      }
      const endpoint = url.getShopById(id);
      return dispatch(fetchShopById(endpoint, id));
    };
  }
};

const fetchProductDetail = (endpoint, id) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_PRODUCT_DETAIL_REQUEST,
      types.FETCH_PRODUCT_DETAIL_SUCCESS,
      types.FETCH_PRODUCT_DETAIL_FAILURE
    ],
    endpoint,
    schema: productSchema
  },
  id
});

const fetchShopById = (endpoint, id) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_SHOP_REQUEST,
      types.FETCH_SHOP_SUCCESS,
      types.FETCH_SHOP_FAILURE
    ],
    endpoint,
    schema: shopSchema
  },
  id
});

const fetchProductDetailSuccess = id => ({
  type: types.FETCH_PRODUCT_DETAIL_SUCCESS,
  id
});

const fetchShopSuccess = id => ({
  type: types.FETCH_SHOP_SUCCESS,
  id
});


// 商品詳情reducer
const product = (state = initialState.product, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCT_DETAIL_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_PRODUCT_DETAIL_SUCCESS:
      return { ...state, id: action.id, isFetching: false };
    case types.FETCH_PRODUCT_DETAIL_FAILURE:
      return { ...state, isFetching: false, id: null };
    default:
      return state;
  }
};


// 店家reducer
const relatedShop = (state = initialState.relatedShop, action) => {
  switch (action.type) {
    case types.FETCH_SHOP_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_SHOP_SUCCESS:
      return { ...state, id: action.id, isFetching: false };
    case types.FETCH_SHOP_FAILURE:
      return { ...state, isFetching: false, id: null };
    default:
      return state;
  }
};


const reducer = combineReducers({
  product,
  relatedShop
});
export default reducer;



// selectors 在商品詳情頁當中的容器型組件中去使用
//獲取商品詳情
export const getProduct = (state, id) => {
  return getProductDetail(state, id)
}

//獲取管理的店家訊息
export const getRelatedShop = (state, productId) => {
  //根據商品id獲取店家訊息
  const product = getProductById(state, productId); //透過product對應的實體模塊獲取資料
  let shopId = product ? product.nearestShop : null;
  if(shopId) {
    return getShopById(state, shopId);
  }
  return null;
}
