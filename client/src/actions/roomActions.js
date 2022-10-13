import axios from "axios";
import {
  CREATE_ROOM_FAIL,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
  GET_ALL_ROOM_REQUEST,
  GET_ALL_ROOM_SUCCESS,
  GET_ALL_ROOM_FAIL,
  DELETE_ROOM_REQUEST,
  DELETE_ROOM_FAIL,
} from "../constants/roomConstants";

export const createRoom = (roomData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_ROOM_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`api/v1/room/new`, roomData, config);

    dispatch({
      type: CREATE_ROOM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_ROOM_FAIL,
      payload: error.data,
    });
  }
};

export const getAllRooms = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ROOM_REQUEST });

    const { data } = await axios.get(`/api/v1/rooms`);

    dispatch({ type: GET_ALL_ROOM_SUCCESS, payload: data.rooms });
  } catch (error) {
    dispatch({ type: GET_ALL_ROOM_FAIL, payload: error.response });
  }
};

export const deleteRoom = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ROOM_REQUEST });

    const { data } = await axios.delete(`api/v1/room/${id}`);

    console.log("Room Delete data", data);
  } catch (error) {
    dispatch({ type: DELETE_ROOM_FAIL, payload: error.data });

    console.log(error);
  }
};
