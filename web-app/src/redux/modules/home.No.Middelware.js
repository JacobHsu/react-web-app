import { get } from "../../utils/request"; //導入封裝好的get方法
import url from "../../utils/url";

export const types = {
  FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST", //猜你喜歡
  FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS",
  FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE"
};


//container可以調用loadLike 來fetch獲取猜你喜歡的數據
//todo: 對每個api代碼這樣編寫rudux層看起來太過臃腫繁瑣 (簡化此類似模板式方法的編寫，todo 用redux中间件針對網路請求進一步的封裝)
//每發送一個網路請求，需要先去發送一個action，告知redux，一個請求開始發送，然後請求發送成功後，需要發送請求成功的action，同理失敗也是
//對於每個請求都需要類似處理，優化成一個actoin描述
export const actions = {
  loadLike: () => {
    return (dispatch, getState) => {
      dispatch(fetchLikesRequest());
      return get(
        //參數 第一條開始獲取 每頁獲取十條
        url.getProductList(0, 10).then( 
          data => {
            dispatch(fetchLikesSuccess(data));
            //todo: 只在home.js處理action.type是不夠的 還需要將數據保存到 entities下 products中(products是保存領域數據的)
            //dispatch(action) 告知products模塊在它的reducer模塊進行數據更新 將api或取到的數據保存到products當中  
          },
          error => {
            dispatch(fetchLikesFailure(error));
          }
        )
      ); 
    };
  }
};

const fetchLikesRequest = () => ({
  type: types.FETCH_LIKES_REQUEST
});
const fetchLikesSuccess = data => ({
  type: types.FETCH_LIKES_SUCCESS,
  data
});
const fetchLikesFailure = data => ({
  type: types.FETCH_LIKES_FAILURE,
  data
});


const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_LIKES_REQUEST:
    // todo
    case types.FETCH_LIKES_SUCCESS:
    // todo
    case types.FETCH_LIKES_FAILURE:
    // todo
    default:
      return state;
  }
};
export default reducer;
