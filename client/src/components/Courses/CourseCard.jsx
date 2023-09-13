import React from "react"
import "./courses.css"
import OnlineCourses from "./OnlineCourses"
import Heading from "../Common/heading/Heading"

export const coursesCard = [
    {
      id: 1,
      cover: "./images/courses/1.png",
      coursesName: "Standard 1",
      courTeacher: [
        {
          dcover: "./images/Avatar.png",
          name: "by Ram Gurung",
          totalTime: "50 lectures (100 hrs)",
        },
      ],
      priceAll: "$0",
      pricePer: "Free",
    },
    {
      id: 2,
      cover: "./images/courses/2.png",
      coursesName: "Standard 2",
      courTeacher: [
        {
          dcover: "./images/Avatar.png",
          name: "by Ram Gurung",
          totalTime: "50 lectures (100 hrs)",
        },
      ],
      priceAll: "$0",
      pricePer: "Free",
    },
    {
      id: 3,
      cover: "./images/courses/3.png",
      coursesName: "Standard 3",
      courTeacher: [
        {
          dcover: "./images/Avatar.png",
          name: "by Ram Gurung",
          totalTime: "50 lectures (100 hrs)",
        },
      ],
      priceAll: "$0",
      pricePer: "Free",
    },
    {
      id: 4,
      cover: "./images/courses/4.png",
      coursesName: "Standard 4",
      courTeacher: [
        {
          dcover: "./images/Avatar.png",
          name: "by Ram Gurung",
          totalTime: "50 lectures (100 hrs)",
        },
      ],
      priceAll: "$0",
      pricePer: "Free",
    },
    {
      id: 5,
      cover: "./images/courses/5.png",
      coursesName: "Standard 5",
      courTeacher: [
        {
          dcover: "./images/Avatar.png",
          name: "by Ram Gurung",
          totalTime: "50 lectures (100 hrs)",
        },
      ],
      priceAll: "$0",
      pricePer: "Free",
    },
    {
      id: 6,
      cover: "./images/courses/6.png",
      coursesName: "Standard 6",
      courTeacher: [
        {
          dcover: "./images/Avatar.png",
          name: "by Ram Gurung",
          totalTime: "50 lectures (100 hrs)",
        },
      ],
      priceAll: "$0",
      pricePer: "Free",
    },
    {
      id: 7,
      cover: "./images/courses/7.png",
      coursesName: "Standard 7",
      courTeacher: [
        {
          dcover: "./images/Avatar.png",
          name: "by Ram Gurung",
          totalTime: "50 lectures (100 hrs)",
        },
      ],
      priceAll: "$0",
      pricePer: "Free",
    },
    {
      id: 8,
      cover: "./images/courses/8.png",
      coursesName: "Standard 8",
      courTeacher: [
        {
          dcover: "./images/Avatar.png",
          name: "by Ram Gurung",
          totalTime: "50 lectures (100 hrs)",
        },
      ],
      priceAll: "$0",
      pricePer: "Free",
    },
    {
      id: 9,
      cover: "./images/courses/9.png",
      coursesName: "Standard 9",
      courTeacher: [
        {
          dcover: "./images/Avatar.png",
          name: "by Ram Gurung",
          totalTime: "50 lectures (100 hrs)",
        },
      ],
      priceAll: "$0",
      pricePer: "Free",
    },
    {
      id: 10,
      cover: "./images/courses/10.png",
      coursesName: "Standard 10",
      courTeacher: [
        {
          dcover: "./images/Avatar.png",
          name: "by Ram Gurung",
          totalTime: "50 lectures (100 hrs)",
        },
      ],
      priceAll: "$0",
      pricePer: "Free",
    },
    {
      id: 11,
      cover: "./images/courses/11.png",
      coursesName: "Standard 11",
      courTeacher: [
        {
          dcover: "./images/Avatar.png",
          name: "by Ram Gurung",
          totalTime: "50 lectures (100 hrs)",
        },
      ],
      priceAll: "$0",
      pricePer: "Free",
    },
    {
      id: 12,
      cover: "./images/courses/12.png",
      coursesName: "Standard 12",
      courTeacher: [
        {
          dcover: "./images/Avatar.png",
          name: "by Ram Gurung",
          totalTime: "50 lectures (100 hrs)",
        },
      ],
      priceAll: "$0",
      pricePer: "Free",
    }
  ]

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='our courses' title='explore our popular online courses' />

          <div className='coursesCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>
                    <div className='text'>
                      <h1>{val.coursesName}</h1>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                      <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                <img src={details.dcover} alt='' />
                              </div>
                              <div className='para'>
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='price'>
                    <h3>
                      {val.priceAll} / {val.pricePer}
                    </h3>
                  </div>
                  <button className='outline-btn'>ENROLL NOW !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
