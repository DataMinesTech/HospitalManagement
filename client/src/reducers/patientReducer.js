import {
  CREATE_PATIENT_REQUEST,
  CREATE_PATIENT_SUCCESS,
  CREATE_PATIENT_FAIL,
  CLEAR_ERRORS,
} from "../constants/patientConstants";

export const patientReducer = (state = { patient: {} }, action) => {
  switch (action.type) {
    case CREATE_PATIENT_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case CREATE_PATIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        patient: action.payload,
      };
    case CREATE_PATIENT_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        patient: null,
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
