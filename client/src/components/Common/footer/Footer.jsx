import React from "react"
import "./footer.css"

export const blog = [
  {
    id: 1,
    type: "admin",
    date: "JAN. 18, 2021",
    com: "3 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b1.webp",
  },
  {
    id: 2,
    type: "admin",
    date: "API. 25, 2022",
    com: "5 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b2.webp",
  },
  {
    id: 3,
    type: "user",
    date: "MAY. 15, 2022",
    com: "10 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b3.webp",
  },
  {
    id: 4,
    type: "admin",
    date: "JAN. 02, 2022",
    com: "3 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b4.webp",
  },
  {
    id: 5,
    type: "admin",
    date: "DEC. 14, 2022",
    com: "3 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b5.webp",
  },
  {
    id: 6,
    type: "user",
    date: "JAN. 18, 2021",
    com: "12 COMMENTS ",
    title: "Build your Dream Software & Engineering Career",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    cover: "../images/blog/b6.webp",
  },
]

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Join Thousand Of Happy Students!</h1>
            <span>Subscribe our newsletter & get latest news and updation!</span>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <a href='/'>
              <h1 style={{ color: "Black" }}>Easy Education Himatnagar</h1>
            </a>
            <span>UNITY | EXCELLENCE | SUCCESS</span>
            <p>“Easy Education: Where Knowledge Meets Simplicity.”</p>

            <div className='social'>

              <a href='https://m.facebook.com/story.php?story_fbid=122340196948376&id=105714251944304&locale2=hi_IN&_rdr'>
                <i className='fab fa-facebook-f icon'></i>
              </a>

              <a href='https://www.linkedin.com/in/easy-education-himatnagar-8a8245259/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in'>
                <i className='fab fa-linkedin icon'></i>
              </a>

              <a href='https://twitter.com/ezeducation'>
                <i className='fab fa-twitter icon'></i>
              </a>
              
              <a href='https://www.youtube.com/channel/UC0LiN6hry9BEAWYZZ5byfzg'>
                <i className='fab fa-youtube icon'></i>
              </a>
            </div>
          </div>
          
          <div className='box link'>
        <h3>Explore</h3>
        <ul>
          <li><a className='link-without-color' href="/courses">Courses</a></li>
          <li><a className='link-without-color' href="/services">Services</a></li>
          <li><a className='link-without-color' href="/about">About Us</a></li>
          <li><a className='link-without-color' href="/contact">Contact us</a></li>
        </ul>
      </div>
      <div className='box link'>
        <h3>Quick Links</h3>
        <ul>
          <li><a className='link-without-color' href="/">Privacy</a></li>
          <li><a className='link-without-color' href="/">Feedbacks</a></li>
          <li><a className='link-without-color' href="/">Pricing</a></li>
          <li><a className='link-without-color' href="/contact">Contact Us</a></li>
        </ul>
      </div>
          
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB'>

                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                
                <div className='text'>

                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>

                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>

                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>

              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                19/C Bank scoicty, Mahavirnagar Himatnagar 383001
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                <a className='link-without-color' href="tel:+919408596107">+91 9408596107</a>
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                <a className='link-without-color' href="mailto:info@easyeducationhimatnagar.com">info@easyeducationhimatnagar.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
        2023 Educator, All Rights Reserved | Developed By Softrica <i className='fa fa-heart'></i> by Easy Education Himatnagar
        </p>
      </div>
    </>
  )
}

export default Footer
