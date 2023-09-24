import React from "react"
import Hero from "./hero/Hero"
import AboutCard from "../About/AboutCard"
import CourseCard from "../Courses/CourseCard"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <CourseCard />
      <Testimonal />
    </>
  )
}

export default Home
