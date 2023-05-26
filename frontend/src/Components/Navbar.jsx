import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { getProfile, Logout } from '../Redux/ProfileReducer/action'
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const dispatch = useDispatch();
  const token = useSelector(store => store.AuthReducer.token)
  const profile = useSelector(store => store.ProfileReducer.data)
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(Logout(navigate))
  }
  useEffect(() => {
    dispatch(getProfile(token))
  }, [token])
  return (
    <div className='navbar'>
      <div className="nav-section">
        account holder:-{profile.name}
      </div>
      <div className="nav-section">
        account balance:-{profile.balance}
      </div>
      <button onClick={handleLogout} className="logout-btn">
        logout
      </button>

    </div>
  )
}

export default Navbar;