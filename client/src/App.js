import React from 'react';
import { BrowserRouter , Routes, Route, Navigate, useActionData } from 'react-router-dom';
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
import Login from "./components/User/Login"
import Loginmain from "./components/User/Login/Loginmain"
import Signupmain from "./components/User/Signup/Signupmain"
import STD1 from "./components/Courses/Standard1/Standard1"
import STD2 from "./components/Courses/Standard2/Standard2"
import STD3 from "./components/Courses/Standard3/Standard3"
import STD4 from "./components/Courses/Standard4/Standard4"
import STD5 from "./components/Courses/Standard5/Standard5"
import STD6 from "./components/Courses/Standard6/Standard6"
import STD7 from "./components/Courses/Standard7/Standard7"
import STD8 from "./components/Courses/Standard8/Standard8"
import STD9 from "./components/Courses/Standard9/Standard9"
import STD10 from "./components/Courses/Standard10/Standard10"
import STD11 from "./components/Courses/Standard11/Standard11"
import STD12 from "./components/Courses/Standard12/Standard12"

import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};
  console.log(user);
	useEffect(() => {
		getUser();
	}, []);

  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/'element={<Home/>} />
            {/* <Route path='/courses' element={<Courses/>} />
            <Route path='/onlineExam' element={<OnlineExam/>} />
            <Route path='/admission' element={<Admission/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/media' element={<Media/>} />
            <Route path='/std1' element={<STD1/>} />
            <Route path='/std2' element={<STD2/>} />
            <Route path='/std3' element={<STD3/>} />
            <Route path='/std4' element={<STD4/>} />
            <Route path='/std5' element={<STD5/>} />
            <Route path='/std6' element={<STD6/>} />
            <Route path='/std7' element={<STD7/>} />
            <Route path='/std8' element={<STD8/>} />
            <Route path='/std9' element={<STD9/>} />
            <Route path='/std10' element={<STD10/>} />
            <Route path='/std11' element={<STD11/>} />
            <Route path='/std12' element={<STD12/>} /> */}
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/loginmain' element={<Loginmain/>} />
            <Route path='/signupmain' element={<Signupmain/>} />

            <Route path='/courses' element={user ? <Courses /> : <Navigate to="/login" />} />
            <Route path='/onlineExam' element={user ? <onlineExam /> : <Navigate to="/login" />} />
            <Route path='/admission' element={user ? <Admission /> : <Navigate to="/login" />} />
            <Route path='/media' element={user ? <Media /> : <Navigate to="/login" />} />
            <Route path='/std1' element={user ? <STD1 /> : <Navigate to="/login" />} />
            <Route path='/std2' element={user ? <STD2 /> : <Navigate to="/login" />} />
            <Route path='/std3' element={user ? <STD3 /> : <Navigate to="/login" />} />
            <Route path='/std4' element={user ? <STD4 /> : <Navigate to="/login" />} />
            <Route path='/std5' element={user ? <STD5 /> : <Navigate to="/login" />} />
            <Route path='/std6' element={user ? <STD6 /> : <Navigate to="/login" />} />
            <Route path='/std7' element={user ? <STD7 /> : <Navigate to="/login" />} />
            <Route path='/std8' element={user ? <STD8 /> : <Navigate to="/login" />} />
            <Route path='/std9' element={user ? <STD9 /> : <Navigate to="/login" />} />
            <Route path='/std10' element={user ? <STD10 /> : <Navigate to="/login" />} />
            <Route path='/std11' element={user ? <STD11 /> : <Navigate to="/login" />} />
            <Route path='/std12' element={user ? <STD12 /> : <Navigate to="/login" />} />
            <Route path='/login' element={ <Login />} />
            <Route path='/dashboard' element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />

          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;