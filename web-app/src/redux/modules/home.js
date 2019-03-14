import { combineReducers} from "redux"
import url from "../../utils/url";
import { FETCH_DATA } from "../middleware/api"
import { schema } from "./entities/products"

// 請求參數使用到的常量對象
export const params = {
  PATH_LIKES: "likes", //猜你喜歡
  PATH_DISCOUNTS: "discounts", //超值特惠
  PAGE_SIZE_LIKES: 5,
  PAGE_SIZE_DISCOUNTS: 3
};

export const types = {
  FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST", //猜你喜歡
  FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS",
  FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE",
  FETCH_DISCOUNTS_REQUEST: "HOME/FETCH_DISCOUNTS_REQUEST",//超值特惠
  FETCH_DISCOUNTS_SUCCESS: "HOME/FETCH_DISCOUNTS_SUCCESS",
  FETCH_DISCOUNTS_FAILURE: "HOME/FETCH_DISCOUNTS_FAILURE"
};

const initialState = {
  likes: {
    isFetching: false,
    pageCount: 0,
    ids: [],
  },
  discounts: {
    isFetching: false,
    ids:[],
  }
}

export const actions = {
  //加載猜你喜歡  
  loadLikes: () => {
    return (dispatch, getState) => {
      const { pageCount } = getState().home.likes;
      const rowIndex = pageCount * params.PAGE_SIZE_LIKES; //下次加載數據是第幾條
      const endpoint = url.getProductList(params.PATH_LIKES, rowIndex, params.PAGE_SIZE_LIKES) //參數 來源,第一條開始獲取 每頁獲取十條 0,10
      return dispatch(fetchLikes(endpoint))
    }
  },
  //加載特惠商品
  loadDiscounts: () => {
    return (dispatch, getState) => {
      const {ids} = getState().home.discounts
      if (ids.length >0 ) {
        return null;
      }
      const endpoint = url.getProductList(
        params.PATH_DISCOUNTS,
        0, //只有3條 不需分頁
        params.PAGE_SIZE_DISCOUNTS
      );
      return dispatch(fetchDiscounts(endpoint));
    };
  }
}

//所有與發送請求相關的處理
const fetchLikes = (endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_LIKES_REQUEST,
      types.FETCH_LIKES_SUCCESS,
      types.FETCH_LIKES_FAILURE
    ],
    endpoint, //對應url
    schema //對應領域實體
  }
})

const fetchDiscounts = endpoint => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_DISCOUNTS_REQUEST,
      types.FETCH_DISCOUNTS_SUCCESS,
      types.FETCH_DISCOUNTS_FAILURE
    ],
    endpoint,
    schema
  }
});


//猜你喜歡reducer
const likes = (state = initialState.likes, action) => {
  switch (action.type) {
    case types.FETCH_LIKES_REQUEST:
      return { ...state, isFetching: true }; //根據isFetching 顯示 loading 效果
    case types.FETCH_LIKES_SUCCESS:
      return {
        ...state,
        isFetching: false, //請求結束
        pageCount: state.pageCount + 1, //得當前頁碼
        ids: state.ids.concat(action.response.ids) //ids維持數據有序性  concat 返回新array保證不是修改直接修改原ids ref: middleware/api.js
      };
    case types.FETCH_LIKES_FAILURE:
      return {...state, isFetching: false} //通用錯誤處理設狀態即可 api.js fetchData error 發送action 會被app模塊 app.js  CLEAR_ERROR 處理  
    default:
      return state;
  }
};

//特惠商品reducer
const discounts = (state = initialState.discounts, action) => {
  switch (action.type) {
    case types.FETCH_DISCOUNTS_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_DISCOUNTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ids: state.ids.concat(action.response.ids)
      };
    case types.FETCH_DISCOUNTS_FAILURE:
      return {...state, isFetching: false}
    default:
      return state;
  }
};

//將reducer合併
const reducer = combineReducers({
  discounts,
  likes
})

// const reducer = (state = {}, action) => {
//   switch (action.type) {
//     case types.FETCH_LIKES_REQUEST:
//     // todo
//     case types.FETCH_LIKES_SUCCESS:
//     // todo
//     case types.FETCH_LIKES_FAILURE:
//     // todo
//     default:
//       return state;
//   }
// };
export default reducer;
