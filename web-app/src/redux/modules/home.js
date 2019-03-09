import { get } from "../../utils/request"; //導入封裝好的get方法
import url from "../../utils/url";
import { FETCH_DATA } from "../middleware/api"
import { schema } from "./entities/products"

export const types = {
  FETCH_LIKES_REQUEST: "HOME/FETCH_LIKES_REQUEST", //猜你喜歡
  FETCH_LIKES_SUCCESS: "HOME/FETCH_LIKES_SUCCESS",
  FETCH_LIKES_FAILURE: "HOME/FETCH_LIKES_FAILURE"
};


export const actions = {
  loadLikes: () => {
    return (dispatch, getState) => {
      const endpoint = url.getProductList(0, 10) //參數 第一條開始獲取 每頁獲取十條
      return dispatch(fetchLikes(endpoint))
    }
  },
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
