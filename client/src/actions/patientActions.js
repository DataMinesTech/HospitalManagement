import {
  CREATE_PATIENT_REQUEST,
  CREATE_PATIENT_SUCCESS,
  CREATE_PATIENT_FAIL,
  CLEAR_ERRORS,
} from "../constants/patientConstants";
import axios from "axios";

export const createNewPatient = (patientData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PATIENT_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    console.log("patientData", patientData);

    const { data } = await axios.post(
      `http://localhost:5000/api/v1/patient/new`,
      patientData,
      config
    );

    dispatch({
      type: CREATE_PATIENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PATIENT_FAIL,
      payload: error.data,
    });
  }
};
