import { createStore, combineReducers, applyMiddleware } from "redux";
// import { auth } from "./reducers/authReducer";
import thunk from "redux-thunk";

import { SnackbarReducer } from "./reducers/SnackbarReducer";
import { Auth } from "./reducers/Auth";
import { adminDashboard_red } from "./reducers/adminDashboard_red";


let AllReducers = combineReducers({
  // auth,
  // FormReducer,
  Auth,
  SnackbarReducer,
  adminDashboard_red,
});

let store = createStore(AllReducers, applyMiddleware(thunk));

export default store;
