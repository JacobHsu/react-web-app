import { createStore, applyMiddleware } from "redux"; //使用中間件需要appltMiddleware
import thunk from "redux-thunk"; //處理異步中間件  
import api from "./middleware/api";
import rootReducer from "./modules";

let store;

if (
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk,api)));
} else {
  //thunk放前api放後 先讓thunk處理函數類型的action，然後讓api中間件處理具體請求的封裝  
  store = createStore(rootReducer, applyMiddleware(thunk,api)); 
}
export default store; 