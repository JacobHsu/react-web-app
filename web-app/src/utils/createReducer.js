//每建立一個redux實體模塊 都要創建reducer邏輯 因此拉至utils進行抽象封裝成函數
// ex redux/modules/entities/shop.js

const createReducer = name => {
  return (state = {}, action) => {
    if (action.response && action.response[name]) {
      return { ...state, ...action.response[name] };
    }
    return state;
  };
};

export default createReducer;
