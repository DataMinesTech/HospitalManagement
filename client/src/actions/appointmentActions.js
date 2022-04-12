import axios from "axios";
import {
  CREATE_APPOINTMENT_FAIL,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  GET_ALL_APPOINTMENTS_FAIL,
  GET_ALL_APPOINTMENTS_REQUEST,
  GET_ALL_APPOINTMENTS_SUCCESS,
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
      payload: error.response,
    });
  }
};

export const getAllAppointments = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_APPOINTMENTS_REQUEST });

    const { data } = await axios.get(`api/v1/appointments`);

    dispatch({
      type: GET_ALL_APPOINTMENTS_SUCCESS,
      payload: data.appointments,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_APPOINTMENTS_FAIL,
      payload: error.response,
    });
  }
};
