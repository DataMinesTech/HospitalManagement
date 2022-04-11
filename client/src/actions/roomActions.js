import axios from "axios";
import {
  CREATE_ROOM_FAIL,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
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
