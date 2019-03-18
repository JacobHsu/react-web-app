import createReducer from "../../../utils/createReducer";

export const schema = {
  name: 'products',
  id: 'id',
} 
const reducer = createReducer(schema.name)

// 移至 src/utils/createReducer
// const reducer = (state = {}, action) => {
//     if(action.response && action.response.products) {
//       return {...state, ...action.response.products}
//     }
//     return state;
//   };
export default reducer;


//selectors 根據id獲取某個商品詳細情形  
export const getProductDetail = (state, id) => {
  const product = state.entities.product[id];
  return product && product.detail && product.purchaseNotes ? product :  null; //判斷資料下方是否有對應的詳情資料
}