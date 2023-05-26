import axios from "axios"
import * as types from "./actionType"

const addTransection=(payload,token)=>(dispatch)=>{
  dispatch({type:types.GET_POST_REQUEST})
  return axios.patch("http://localhost:7000/account/transection",payload,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': `bearer ${token}`
    }
  }).then((r)=>{
    dispatch({type:types.GET_POST_SUCCESS,payload:r.data})
    
    
  }).catch((e)=>{
    dispatch({type:types.GET_POST_FAILURE})
  })
}

const getTransection=(id)=>(dispatch)=>{
  dispatch({type:types.GET_POST_REQUEST});
  return axios.get(`http://localhost:7000/account/gettransection/${id}`).then((r)=>{
    dispatch({type:types.GET_POST_SUCCESS,payload:r.data})
  })
  .catch((e)=>{
    dispatch({type:types.GET_POST_FAILURE})
    console.log(e)
  })
}


export {addTransection,getTransection}