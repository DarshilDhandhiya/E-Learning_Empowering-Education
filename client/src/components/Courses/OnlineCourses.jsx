import React from "react"
import "./courses.css"
import Heading from "../Common/heading/Heading"

export const online = [
  {
    cover: "./images/courses/1.png",
    hoverCover: "./images/courses/1.png",
    courseName: "Standard 1",
    course: "5 Hours",
  },
  {
    cover: "./images/courses/2.png",
    hoverCover: "./images/courses/2.png",
    courseName: "Standard 2",
    course: "7 Hours",
  },
  {
    cover: "./images/courses/3.png",
    hoverCover: "./images/courses/3.png",
    courseName: "Standard 3",
    course: "8 Hours",
  },
  {
    cover: "./images/courses/4.png",
    hoverCover: "./images/courses/4.png",
    courseName: "Standard 4",
    course: "9 Hours",
  },
  {
    cover: "./images/courses/5.png",
    hoverCover: "./images/courses/5.png",
    courseName: "Standard 5",
    course: "10 Hours",
  },
  {
    cover: "./images/courses/6.png",
    hoverCover: "./images/courses/6.png",
    courseName: "Standard 6",
    course: "12 Hours",
  },
  {
    cover: "./images/courses/7.png",
    hoverCover: "./images/courses/7.png",
    courseName: "Standard 7",
    course: "13 Hours",
  },
  {
    cover: "./images/courses/8.png",
    hoverCover: "./images/courses/8.png",
    courseName: "Standard 8",
    course: "13 Hours",
  },
  {
    cover: "./images/courses/9.png",
    hoverCover: "./images/courses/9.png",
    courseName: "Standard 9",
    course: "14 Hours",
  },
  {
    cover: "./images/courses/10.png",
    hoverCover: "./images/courses/10.png",
    courseName: "Standard 10",
    course: "15 Hours",
  },
  {
    cover: "./images/courses/11.png",
    hoverCover: "./images/courses/11.png",
    courseName: "Standard 11",
    course: "20 Hours",
  },
  {
    cover: "./images/courses/12.png",
    hoverCover: "./images/courses/12.png",
    courseName: "Standard 12",
    course: "25 Hours",
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
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
