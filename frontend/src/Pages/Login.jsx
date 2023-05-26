import { Box ,Button,Input} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import "../Style/Login.css"
import { getLogin } from '../Redux/AuthReducer/action';
import { useSelector } from 'react-redux';import "../Style/Login.css"
import { useToast } from '@chakra-ui/react'
import Load from '../Components/Login/Load';

const Login = () => {
     const[email,setEmail]=useState("");
     const[password,setPassword]=useState("");
     const navigate=useNavigate();
     const dispatch=useDispatch();
     const toast = useToast()
     const isLoading=useSelector(store=>store.AuthReducer.isLoading);

     const handleSubmit=()=>{
          let data={
             email,password
          }
  
          dispatch(getLogin(data,toast,navigate))
          
      }
      if(isLoading){
          return (
               <Load/>
          )
      }
  return (
    <div className="login-box">
     <div className='loginform-box'>
     <h1 style={{color:"#2196f9",fontSize:"30px",fontWeight:"bold",textAlign:"center"}}>Login</h1>
     <Input mt="20px"  placeholder=' email' bgColor="white" onChange={(e)=>setEmail(e.target.value)}/>


<Input mt="20px"  placeholder={"password"} bgColor="white" onChange={(e)=>setPassword(e.target.value)}/>
<Button w="100%" bgColor={"#2196f9"} onClick={handleSubmit} color="white" p="0 10px" m="auto" display="flex" mt="15px">Sing in</Button>
<Button w="100%" bgColor={"#2196f9"}  color="white" p="0 10px" m="auto" display="flex" mt="15px" onClick={()=>navigate("/signup")}>Create new account</Button>
<Box display={"flex"} w="100%" m="auto" mt="20px" justifyContent={"space-around"} alignItems="center">
    <Box w="40%" borderTop="1px solid black">
    </Box>
    <p>or</p>
    <Box w="40%" borderTop="1px solid black">
    </Box>
</Box>
<Box w="50px" h="50px" m="auto">
    <img src="https://www.transparentpng.com/thumb/google-logo/shady-google-logo-pictures-png-free-BjH4wQ.png" alt="" />
</Box>
     </div>
    </div>
  )
}

export default Login