import {combineReducers} from "redux";
import products from "./products";
import shops from "./shops";
import orders from "./orders";
import comments from "./comments";

// 合併領域狀態
const  rootReducer = combineReducers({
    products,
    shops,
    orders,
    comments
})

export default rootReducer