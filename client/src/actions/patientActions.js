import {
  CREATE_PATIENT_REQUEST,
  CREATE_PATIENT_SUCCESS,
  CREATE_PATIENT_FAIL,
  CLEAR_ERRORS,
  GET_PATIENTS_REQUEST,
  GET_ALL_PATIENTS_REQUEST,
  GET_ALL_PATIENTS_SUCCESS,
  GET_ALL_PATIENTS_FAIL,
  DELETE_PATIENT_REQUEST,
  DELETE_PATIENT_FAIL,
  UPDATE_PATIENTS_REQUEST,
  UPDATE_PATIENTS_SUCCESS,
  UPDATE_PATIENTS_FAIL,
} from "../constants/patientConstants";
import axios from "axios";

export const createNewPatient = (patientData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PATIENT_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    console.log("patientData", patientData);

    const { data } = await axios.post(
      `/api/v1/patient/new`,
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

export const getAllPatients = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PATIENTS_REQUEST });

    const { data } = await axios.get(`/api/v1/patients`);

    console.log("get all patients", data);

    dispatch({ type: GET_ALL_PATIENTS_SUCCESS, payload: data.patients });
  } catch (error) {
    dispatch({ type: GET_ALL_PATIENTS_FAIL, payload: error.data });
  }
};

export const searchPatient = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PATIENTS_REQUEST });

    const { data } = await axios.post(`api/v1/patient/${id}`);

    console.log("patient search data", data);
  } catch (error) {
    dispatch({ type: GET_ALL_PATIENTS_FAIL, payload: error.data });

    console.log(error);
  }
};

export const deletePatient = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PATIENT_REQUEST });

    const { data } = await axios.delete(`api/v1/patient/${id}`);

    console.log("patient Delete data", data);
  } catch (error) {
    dispatch({ type: DELETE_PATIENT_FAIL, payload: error.data });

    console.log(error);
  }
};

export const updatePatient = (payload) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PATIENTS_REQUEST });

    const { data } = await axios.put(
      `/api/v1/patient/${payload.patientUHID}`,
      payload
    );
    console.log("patient update data", data);
    dispatch({ type: UPDATE_PATIENTS_SUCCESS });
  } catch (error) {
    dispatch({ type: UPDATE_PATIENTS_FAIL, payload: error.data });

    console.log(error);
  }
};

export const updateMedicalHistory = (id, meddata) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PATIENTS_REQUEST });

    console.log(id, meddata);

    const { data } = await axios.put(`/api/v1/patient/medical/${id}`, meddata);

    console.log("patient update data", data);

    dispatch({ type: UPDATE_PATIENTS_SUCCESS });
  } catch (error) {
    dispatch({ type: UPDATE_PATIENTS_FAIL, payload: error.data });

    console.log(error);
  }
};

export const updatePrescribedTests = (id, meddata) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PATIENTS_REQUEST });

    console.log(id, meddata);

    const { data } = await axios.put(
      `/api/v1/patient/prescribed/${id}`,
      meddata
    );

    console.log("patient update data", data);

    dispatch({ type: UPDATE_PATIENTS_SUCCESS });
  } catch (error) {
    dispatch({ type: UPDATE_PATIENTS_FAIL, payload: error.data });

    console.log(error);
  }
};
