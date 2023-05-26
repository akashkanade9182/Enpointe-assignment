import { Box ,Select,Button,Input} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import "../Style/Login.css"
import "../Style/Signup.css"
import { getLogin } from '../Redux/AuthReducer/action';
import { useSelector } from 'react-redux';import "../Style/Login.css"
import axios from "axios"


const postData=(payload)=>{
   return   axios.post("http://localhost:7000/user/signup",payload)
}


const Signup = () => {
     const[name,setName]=useState("");
     const[role,setRole]=useState("")
     const[email,setEmail]=useState("");
     const[password,setPassword]=useState("");
     const navigate=useNavigate();
     const dispatch=useDispatch();
     const  location =useLocation();
     // const comingfrom=location.state.from || "/"
     const isAuth=useSelector(store=>store.AuthReducer.isAuth);

     const handleSubmit=()=>{
         let data={name,email,role,password}
         postData(data).then((r)=>{
          navigate("/")
         })
         .catch((e)=>{
          alert(`${e}`)
         })
     }
  return (
     <div className="login-box">
     <div style={{height:"450px"}} className='loginform-box'>
     <h1 style={{color:"#2196f9",fontSize:"30px",fontWeight:"bold",textAlign:"center"}}>Signup</h1>
     <Input mt="20px" value={name}  placeholder=' name' bgColor="white" onChange={(e)=>setName(e.target.value)}/>

     <Input mt="20px" value={email}  placeholder=' email' bgColor="white" onChange={(e)=>setEmail(e.target.value)}/>


<Input mt="20px"  value={password}  placeholder={"password"} bgColor="white" onChange={(e)=>setPassword(e.target.value)}/>
<Select className='role' value={role} placeholder='select role'onChange={(e)=>setRole(e.target.value)} name="" id="">
     {/* <option value="">Select role</option> */}
     <option value="customer">Customer</option>
     <option value="banker">Banker</option>
</Select>
<Button w="100%" bgColor={"#2196f9"} onClick={handleSubmit} color="white" p="0 10px" m="auto" display="flex" mt="15px">Sing up</Button>
<Button w="100%" bgColor={"#2196f9"}  color="white" p="0 10px" m="auto" display="flex" mt="15px" onClick={()=>navigate("/")}>Already have account</Button>

     </div>
    </div>
  )
}

export default Signup;