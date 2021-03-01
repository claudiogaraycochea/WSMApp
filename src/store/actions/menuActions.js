// import axios from "axios";
// import { API } from "../config/constants";

export const setMenuId = (menu_id) => async (dispatch) => {
  try {
    dispatch({
      type: 'SET_SUBMENU_SUCCESS',
      menu_id: menu_id,
    });
  } catch (error) {
    dispatch({
      type: 'CREATE_COMPANY_OWN_ERROR',
      error_message: error
    });
  }
};