import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import { patientReducer } from "./reducers/patientReducer";

const reducer = combineReducers({
  user: userReducer,
  patients: patientReducer,
});

const middleware = [thunk];

let initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
