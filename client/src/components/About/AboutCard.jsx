import React from "react";
import Heading from "../Common/heading/Heading";
import "./about.css";
import Awrapper from "./Awrapper";

// Define homeAbout data directly in the same file
const homeAbout = [
  {
    id: 1,
    cover: "https://img.icons8.com/dotty/80/000000/storytelling.png",
    title: "Best Learning Courses",
    desc: "Discover our curated selection of the best learning courses designed to empower you",
  },
  {
    id: 2,
    cover: "https://img.icons8.com/ios/80/000000/diploma.png",
    title: "Best Learning Courses",
    desc: "Discover our curated selection of the best learning courses designed to empower you",
  },
  {
    id: 3,
    cover: "https://img.icons8.com/ios/80/000000/athlete.png",
    title: "Expert Instruction",
    desc: "Experience expert instruction from our highly qualified and dedicated educators",
  },
];

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB' key={val.id}>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
