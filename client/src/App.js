import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Header from "./components/Common/header/Header"
import Footer from "./components/Common/footer/Footer";
import Home from "./components/Home/Home"
import Courses from "./components/Courses/Courses"
import OnlineExam from "./components/OnlineExam/OnlineExam"
import Admission from "./components/Admission/Admission"
import Dashboard from "./components/Dashboard/Dashboard"
import Media from "./components/Media/Media"
import Whatsapp from "./components/Whatsapp_Me/Whatsapp_Me"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/courses' exact component={Courses} />
            <Route path='/onlineExam' exact component={OnlineExam} />
            <Route path='/admission' exact component={Admission} />
            <Route path='/dashboard' exact component={Dashboard} />
            <Route path='/media' exact component={Media} />
            <Route path='/whatsapp' exact component={Whatsapp} />
            <Route path='/about' exact component={About} />
            <Route path='/contact' exact component={Contact} />
          </Routes>

      </Router>
    </>
  );
}

export default App;