import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './Login'
import Accountpage from './Accountpage'
import Transectionpage from './Transectionpage'
import Signup from './Signup'


const AllRoutes = () => {
     return (
          <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
               <Route path="/accountpage" element={<Accountpage />} />
               <Route path="/transectionpage" element={<Transectionpage />} />

          </Routes>
     )
}

export default AllRoutes;