import * as types from "./actionTypes"
import axios from "axios"
import { addTransection } from "../AppReducer/action";

const getProfile=(token)=>(dispatch)=>{
  const options = {
    url: 'http://localhost:7000/user/getprofile',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `bearer ${token}`
    },
 
  };
dispatch({type:types.GET_PROFILE_REQUEST})
  return axios(options).then((r)=>{
    dispatch({type:types.GET_PROFILE_SUCCESS,payload:r.data})
  }).catch((e)=>{
    dispatch({type:types.GET_PROFILE_FAILURE})
  })
}

const updateProfile=(token,payload,{task},onClose)=>(dispatch)=>{
 
dispatch({type:types.GET_PROFILE_REQUEST})
  return axios.patch("http://localhost:7000/user/updateprofile",payload,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `bearer ${token}`
    }
  }).then((r)=>{
    dispatch({type:types.GET_PROFILE_SUCCESS,payload:r.data})
    alert(`${task}`)
    onClose()
  }).catch((e)=>{
    dispatch({type:types.GET_PROFILE_FAILURE})
  })
}

export {getProfile,updateProfile}
