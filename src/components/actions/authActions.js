import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { API_BASE_URL } from '../../config'


import { SET_CURRENT_USER, getErrors } from './types'

export const registerUser = (userData, history) => dispatch => {
  axios
    .post(`${API_BASE_URL}/api/users/register`, userData)
    .then(() => history.push('/login'))
    .catch(err => dispatch(getErrors(err)))
}

export const loginUser = userData => dispatch => {
  axios
    .post(`${API_BASE_URL}/api/users/login`, userData)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      setAuthToken(token)
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded))
    })
    .catch(err => dispatch(getErrors(err)))
}

export const setCurrentUser = decoded => {
  return { type: SET_CURRENT_USER, payload: decoded }
}

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  dispatch(setCurrentUser({}))
}
