import axios from "axios";
import {
  CREATE_INVENTORY_FAIL,
  CREATE_INVENTORY_REQUEST,
  CREATE_INVENTORY_SUCCESS,
  GET_ALL_INVENTORY_FAIL,
  GET_ALL_INVENTORY_REQUEST,
  GET_ALL_INVENTORY_SUCCESS,
} from "../constants/inventoryConstants";

export const createNewInventory = (inventoryData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_INVENTORY_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    console.log("patientData", inventoryData);

    const { data } = await axios.post(
      `http://localhost:4000/api/v1/create/new`,
      inventoryData,
      config
    );

    dispatch({
      type: CREATE_INVENTORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_INVENTORY_FAIL,
      payload: error.data,
    });
  }
};

export const getAllInventory = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_INVENTORY_REQUEST });

    // const { data } = await axios.get(
    //   `https://inventory-management-dms.vercel.app/api/v1/getall/inventory`
    // );
    const { data } = await axios.get(
      `http://localhost:4000/api/v1/getall/inventory`
    );

    console.log("get all inventory", data);

    dispatch({ type: GET_ALL_INVENTORY_SUCCESS, payload: data.items });
  } catch (error) {
    dispatch({ type: GET_ALL_INVENTORY_FAIL, payload: error.data });
  }
};
