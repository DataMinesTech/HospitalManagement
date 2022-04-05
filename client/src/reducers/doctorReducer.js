import {
  GET_DOCTOR_FAIL,
  GET_DOCTOR_REQUEST,
  GET_DOCTOR_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/doctorConstants";

export const doctorReducer = (state = { doctor: {} }, action) => {
  switch (action.type) {
    case GET_DOCTOR_REQUEST:
      return {
        loading: true,
        searchCompleted: false,
      };
    case GET_DOCTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        searchCompleted: true,
        doctor: action.payload,
      };
    case GET_DOCTOR_FAIL:
      return {
        ...state,
        loading: false,
        searchCompleted: false,
        doctor: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
