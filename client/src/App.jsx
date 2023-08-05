import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Signup from './assets/Login.jsx'
import {BroswerRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <BroswerRouter>
      <Routes>
        <Route path='./register' element={<Signup />}></Route>
        <Route path='./login' element={<Login />}></Route>
      </Routes>
    </BroswerRouter>
  )
}

export default App