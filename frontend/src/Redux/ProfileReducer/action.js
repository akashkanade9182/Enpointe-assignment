import * as types from "./actionTypes"
import axios from "axios"
import { addTransection } from "../AppReducer/action";

const getProfile = (token) => (dispatch) => {
  const options = {
    url: 'https://odd-ruby-angelfish-wear.cyclic.app/user/getprofile',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `bearer ${token}`
    },

  };
  dispatch({ type: types.GET_PROFILE_REQUEST })
  return axios(options).then((r) => {
    dispatch({ type: types.GET_PROFILE_SUCCESS, payload: r.data })
  }).catch((e) => {
    dispatch({ type: types.GET_PROFILE_FAILURE })
  })
}

const updateProfile = (token, payload, { task }, onClose) => (dispatch) => {

  dispatch({ type: types.GET_PROFILE_REQUEST })
  return axios.patch("https://odd-ruby-angelfish-wear.cyclic.app/user/updateprofile", payload, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `bearer ${token}`
    }
  }).then((r) => {
    dispatch({ type: types.GET_PROFILE_SUCCESS, payload: r.data })
    alert(`${task}`)
    onClose();
    dispatch(getProfile(token));
  }).catch((e) => {
    dispatch({ type: types.GET_PROFILE_FAILURE })
  })
}


const getSingleProfile = (token, id) => (dispatch) => {
  const options = {
    url: `https://odd-ruby-angelfish-wear.cyclic.app/user/getsingleuser/${id}`,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `bearer ${token}`
    },

  };
  dispatch({ type: types.GET_PROFILE_REQUEST })
  return axios(options).then((r) => {
    dispatch({ type: types.GET_PROFILE_SUCCESS, payload: r.data })
  }).catch((e) => {
    dispatch({ type: types.GET_PROFILE_FAILURE })
  })
}

const Logout = (navigate) => (dispatch) => {
  dispatch({ type: types.LOG_OUT })
  navigate("/")
}

export { getProfile, updateProfile, getSingleProfile, Logout }
