const initialState = {
  error: null
};

export const types = {
  CLEAR_ERROR: "APP/CLEAR_ERROR"
};

//action creators
export const actions = {
  clearError: () => ({
    type: types.CLEAR_ERROR
  })
};

const reducer = (state = initialState, action) => {
  const { type, error } = action;
  if (type === types.CLEAR_ERROR) {
    return { ...state, error: null };
  } else if (error) {
    return { ...state, error: error };
  }
  return state;
};
export default reducer;


// selectors 從state中獲取某一部分狀態  這裡取error
// UI層和狀態管理層 它的接口都是透過selectors函數通訊的，實現解藕    
export const getError = (state) => {
  return state.app.error
}
