import { createStore, combineReducers, applyMiddleware } from "redux";
// import { auth } from "./reducers/authReducer";
import thunk from "redux-thunk";

import { SnackbarReducer } from "./reducers/SnackbarReducer";
import { Auth } from "./reducers/Auth";
import { adminDashboard_red } from "./reducers/adminDashboard_red";
import { ServicesReducer } from "./reducers/ServicesReducer";
import { TeamReducer } from "./reducers/TeamReducer";
import { BlogReducer } from "./reducers/BlogReducer";





let AllReducers = combineReducers({
  // auth,
  // FormReducer,
  Auth,
  SnackbarReducer,
  adminDashboard_red,
  ServicesReducer,
  TeamReducer,
  BlogReducer,
});

let store = createStore(AllReducers, applyMiddleware(thunk));

export default store;
