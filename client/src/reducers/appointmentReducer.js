import {
  CLEAR_ERRORS,
  CREATE_APPOINTMENT_FAIL,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
} from "../constants/appointmentConstants";

export const createAppointmentReducer = (
  state = { appointment: [] },
  action
) => {
  switch (action.type) {
    case CREATE_APPOINTMENT_REQUEST:
      return {
        loading: true,
        createAppointment: false,
      };
    case CREATE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        createAppointment: true,
        appointment: action.payload,
      };
    case CREATE_APPOINTMENT_FAIL:
      return {
        ...state,
        loading: false,
        createAppointment: false,
        appointment: null,
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
