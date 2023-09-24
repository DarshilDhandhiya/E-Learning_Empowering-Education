// Faq.js
import React, { useState } from "react";
import Heading from "../Common/heading/Heading";
import "./Faq.css";

export const faq = [
  {
    title: "How to Enroll in Online Courses?",
    desc:
      "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Where Is It Hidden by Default?",
    desc:
      "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "How Is It Hidden by Default?",
    desc:
      "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "How to Enroll in Online Courses?",
    desc:
      "This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "Where Is It Hidden by Default?",
    desc:
      "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
  {
    title: "How Is It Hidden by Default?",
    desc:
      "It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
  },
];

const Faq = () => {
  const [click, setClick] = useState(null);

  const toggle = (index) => {
    if (click === index) {
      setClick(null);
    } else {
      setClick(index);
    }
  };

  return (
    <>
      <Heading subtitle="FAQS" title="Frequently Asked Questions" />
      <section className="faq">
        <div className="container">
          {faq.map((val, index) => (
            <div className={`box ${click === index ? "active" : ""}`} key={index}>
              <button className="accordion" onClick={() => toggle(index)}>
                <h2>{val.title}</h2>
                <span>{click === index ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}</span>
              </button>
              {click === index ? (
                <div className="text">
                  <p>{val.desc}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
