import axios from 'axios';
import { API } from '../config/constants';

export const login = (data) => async dispatch => { 
  console.log('userActions:',data);
  dispatch({
    type: 'LOGIN_SUCCESS',
    auth: data.auth,
    user: data.user
  })
}

export const logout = () => async dispatch => { 
  dispatch({
    type: 'LOGOUT_SUCCESS',
    auth: {},
  })
}

export const signUp = (data) => async dispatch => { 
  try {
    const res = await axios.post(`${API}/user/create`, data)
    console.log('res', res.data)
    if(res.data.Error) {
      dispatch({
        type: 'SIGN_UP_SUCCESS',
        sign_up_success: false,
        error_message: {
          type: 'SIGN_UP_ERROR',
          message: 'Error'
        }
      })
    }
    else {
      dispatch({
        type: 'SIGN_UP_SUCCESS',
        sign_up_success: true,
      })      
    }
  }
  catch(error) {
    dispatch({
      type: 'SIGN_UP_ERROR',
      error_message: {
        type: 'SIGN_UP_ERROR',
        message: 'Invalid data.'
      }
    })
  }
}

export const getNotifications = (company_id) => async dispatch => { 
  try {
    const res = await axios.post(`${API}/company/${company_id}/notifications`)
    console.log('res', res.data)
    dispatch({
      type: 'GET_NOTIFICATION_SUCCESS',
      notifications: res.data.result,
    })
  }
  catch(error) {
    dispatch({
      type: 'GET_NOTIFICATION_ERROR',
      error_message: {
        type: 'GET_NOTIFICATION_ERROR',
        message: 'Invalid data.'
      }
    })
  }
}
