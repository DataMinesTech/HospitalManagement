import axios from "axios";
import {
  GET_ALL_DOCTORS_REQUEST,
  GET_ALL_DOCTORS_SUCCESS,
  GET_ALL_DOCTORS_FAIL,
} from "../constants/doctorConstants";

export const getAllDoctors = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_DOCTORS_REQUEST });

    const { data } = await axios.get(`/api/v1/doctors/all`);

    console.log("get all doctors", data);

    dispatch({ type: GET_ALL_DOCTORS_SUCCESS, payload: data.allDoctors });
  } catch (error) {
    dispatch({ type: GET_ALL_DOCTORS_FAIL, payload: error.data });
  }
};
