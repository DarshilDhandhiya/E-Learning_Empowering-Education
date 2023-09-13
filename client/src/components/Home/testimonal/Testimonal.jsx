import React from "react"
import Heading from "../../Common/heading/Heading"
import "./style.css"

export const testimonal = [
  {
    id: 1,
    name: "Sarita",
    post: "Student",
    desc: "Easy Education made complex topics seem easy and approachable. The tutors broke down challenging concepts into simple explanations, making them easy to comprehend. I owe my academic success to their exceptional guidance and support.",
    cover: "./images/Avatar.png",
  },
  {
    id: 2,
    name: "Rakesh",
    post: "Student",
    desc: "Choosing Easy Education was one of the best decisions I made. The tutors are incredibly knowledgeable and passionate about teaching. They provided personalized attention and tailored their approach to suit my learning style, leading to remarkable improvements in my grades.",
    cover: "./images/Avatar.png",
  },
  {
    id: 3,
    name: "Prakash",
    post: "Student",
    desc: "Easy Education has transformed my learning experience. Their team of talented instructors truly cares about my progress and goes above and beyond to ensure I understand the subject matter. They have helped me excel in my studies and build a strong foundation for my future",
    cover: "./images/Avatar.png",
  }
]

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='TESTIMONIAL' title='TESTIMONIAL ' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
