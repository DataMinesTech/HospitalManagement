import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
} from "../constants/userConstants";

import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `api/v1/login`,
      { email, password },
      config
    );

    // console.log(data, "data111");
    // console.log(data.token, "token");
    localStorage.setItem("token", data.token);

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(`/api/v1/me`);

    console.log(data, "load user data current");

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.message });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_USERS_REQUEST });

    const { data } = await axios.get(`/api/v1/users`);

    console.log(data, "all users current");

    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data.users });
  } catch (error) {
    dispatch({ type: GET_ALL_USERS_FAIL });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/logout`);

    dispatch({ type: LOGOUT_USER_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_USER_FAIL, payload: error.response.data.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const createNewUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_USER_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    console.log("userData", userData);

    const { data } = await axios.post(`/api/v1/user/new`, userData, config);

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAIL,
      payload: error.data,
    });
  }
};
