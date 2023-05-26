import React,{useState,useEffect} from 'react'
import "../Style/Trasectionpage.css";
import Navbar from '../Components/Navbar';
import Depositmodel from '../Components/Trasectionpage/Depositmodel';
import { useSelector,useDispatch } from 'react-redux';
import {getTransection} from "../Redux/AppReducer/action"

const Transectionpage = () => {
  const dispatch=useDispatch();
  const data=useSelector(store=>store.AppReducer.data)
  const profile=useSelector(store=>store.ProfileReducer.data)

  useEffect(()=>{
    dispatch(getTransection(profile._id))
  },[])
  return (
     <div className='trasectionpage'>
     <Navbar/>
     <div className="listbox">
          <div className="listhead">
               <div>
               <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 6l16 0" />
  <path d="M4 12l16 0" />
  <path d="M4 18l16 0" />
</svg> <span style={{marginLeft:"10px",fontSize:"25px",fontWeight:"bold"}}>Trasection list</span>
               </div>
               <div className='btn-box'>
                <Depositmodel/>
{/* <button className='deposit-btn'>Deposite</button> */}
<button className='withdraw-btn'>Withdraw</button>
               </div>
 
          </div>

     </div>
     
    </div>
  )
}

export default Transectionpage;