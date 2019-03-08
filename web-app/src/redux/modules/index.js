import { combineReducers } from "redux";
import entities from "./entities";
import home from "./home";
import detail from "./detail";
import app from "./app";

//合併成根reducer 
const rootReducer = comnineReducers({
    entities,
    home,
    detail,
    app
})