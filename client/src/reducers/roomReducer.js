import {
  CLEAR_ERRORS,
  CREATE_ROOM_FAIL,
  CREATE_ROOM_REQUEST,
  CREATE_ROOM_SUCCESS,
} from "../constants/roomConstants";

export const createRoomReducer = (state = { room: [] }, action) => {
  switch (action.type) {
    case CREATE_ROOM_REQUEST:
      return {
        loading: true,
        createdRoom: false,
      };
    case CREATE_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        createdRoom: true,
        room: action.payload,
      };
    case CREATE_ROOM_FAIL:
      return {
        ...state,
        loading: false,
        createRoom: false,
        room: null,
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
