import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import "./App.css"
import Header from "./components/Common/header/Header"
import Footer from "./components/Common/footer/Footer";
import Home from "./components/Home/Home"
import Courses from "./components/Courses/Courses"
import OnlineExam from "./components/OnlineExam/OnlineExam"
import Admission from "./components/Admission/Admission"
import Dashboard from "./components/Dashboard/Dashboard"
import Media from "./components/Media/Media"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Whatsapp_Me from './components/Whatsapp_Me/Whatsapp_Me';
import Login from "./components/User/Login"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/'element={<Home/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/onlineExam' element={<OnlineExam/>} />
            <Route path='/admission' element={<Admission/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/media' element={<Media/>} />
            <Route path='/whatsapp' element={<Whatsapp_Me/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;