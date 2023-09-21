import React from "react"
import Heading from "../../Common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO Easy Education Himatnagar' title='Best Online Education' />
            <p>Welcome to Easy Education Himatnagar. Education is going to start soon. An online test of 20 marks will be conducted daily and a class test will be conducted on Sunday. 15000+15000 will be eligible for government assistance for class 11, 12 Science Arts, Commerce..</p>

            <div className='button'>

              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>

              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              
            </div>
            
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
