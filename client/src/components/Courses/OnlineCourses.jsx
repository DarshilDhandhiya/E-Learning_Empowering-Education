import React from "react"
import "./courses.css"
import Heading from "../Common/heading/Heading"
import { NavLink } from "react-router-dom"

export const online = [
  {
    cover: "./images/courses/1.png",
    hoverCover: "./images/courses/1.png",
    courseName: "Standard 1",
    course: "5 Hours",
    path:"/std1"
  },
  {
    cover: "./images/courses/2.png",
    hoverCover: "./images/courses/2.png",
    courseName: "Standard 2",
    course: "7 Hours",
    path:"/std2"

  },
  {
    cover: "./images/courses/3.png",
    hoverCover: "./images/courses/3.png",
    courseName: "Standard 3",
    course: "8 Hours",
    path:"/std3"

  },
  {
    cover: "./images/courses/4.png",
    hoverCover: "./images/courses/4.png",
    courseName: "Standard 4",
    course: "9 Hours",
    path:"/std4"

  },
  {
    cover: "./images/courses/5.png",
    hoverCover: "./images/courses/5.png",
    courseName: "Standard 5",
    course: "10 Hours",
    path:"/std5"

  },
  {
    cover: "./images/courses/6.png",
    hoverCover: "./images/courses/6.png",
    courseName: "Standard 6",
    course: "12 Hours",
    path:"/std6"

  },
  {
    cover: "./images/courses/7.png",
    hoverCover: "./images/courses/7.png",
    courseName: "Standard 7",
    course: "13 Hours",
    path:"/std7"

  },
  {
    cover: "./images/courses/8.png",
    hoverCover: "./images/courses/8.png",
    courseName: "Standard 8",
    course: "13 Hours",
    path:"/std8"

  },
  {
    cover: "./images/courses/9.png",
    hoverCover: "./images/courses/9.png",
    courseName: "Standard 9",
    course: "14 Hours",
    path:"/std9"

  },
  {
    cover: "./images/courses/10.png",
    hoverCover: "./images/courses/10.png",
    courseName: "Standard 10",
    course: "15 Hours",
    path:"/std10"

  },
  {
    cover: "./images/courses/11.png",
    hoverCover: "./images/courses/11.png",
    courseName: "Standard 11",
    course: "20 Hours",
    path:"/std11"

  },
  {
    cover: "./images/courses/12.png",
    hoverCover: "./images/courses/12.png",
    courseName: "Standard 12",
    course: "25 Hours",
    path:"/std12"

  }
]


const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val) => (
              <NavLink to={val.path} key={val.path}>
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
