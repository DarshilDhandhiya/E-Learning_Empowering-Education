import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to='/OnlineExam'>Online Exam</Link>
            </li>
            <li>
              <Link to='/Admission'>Admission</Link>
            </li>
            <li>
              <Link to='/Dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/Media'>Media</Link>
            </li>
            <li>
              <Link to='/Whatsapp'>Whatsapp Me</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET START</div>
            
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
