import { createStore, applyMiddleware } from "redux"; //使用中間件需要appltMiddleware
import thunk from "redux-thunk"; //處理異步中間件  
import rootReducer from "./modules";

let store;

if (
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk));
}
export default store; 