import axios from "axios";
import {
  CREATE_APPOINTMENT_FAIL,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
} from "../constants/appointmentConstants";

export const createAppointment = (appointmentData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_APPOINTMENT_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `api/v1/appointment/new`,
      appointmentData,
      config
    );

    dispatch({
      type: CREATE_APPOINTMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_APPOINTMENT_FAIL,
      payload: error.data,
    });
  }
};
