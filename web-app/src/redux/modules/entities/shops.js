import createReducer from "../../../utils/createReducer";

export const schema = {
  name: "shops",
  id: "id"
};
const reducer = createReducer(schema.name);
export default reducer;

// selectors 根據id獲取某個商家資訊
export const getShopById = (state, id) => {
  const shop = state.entities.shops[id];
  return shop;
};
