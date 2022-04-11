import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import { patientReducer } from "./reducers/patientReducer";
import { createAppointmentReducer } from "./reducers/appointmentReducer";
import { createRoomReducer } from "./reducers/roomReducer";

const reducer = combineReducers({
  user: userReducer,
  patients: patientReducer,
  appointments: createAppointmentReducer,
  rooms: createRoomReducer,
});

const middleware = [thunk];

let initialState = {};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
