import React from "react";
import Back from "../Common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
  "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1828.1100527226408!2d72.97265728958648!3d23.59643789823213!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM1JzQ0LjAiTiA3MsKwNTgnMjEuOSJF!5e0!3m2!1sen!2sus!4v1694593664164!5m2!1sen!2sus";

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>Feel Free To Contact And Reach Us !</p>

            <p>
              Hello and welcome! We are thrilled to have the opportunity to
              connect with you and address any concerns or questions you may
              have.
            </p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>19/C Bank scoicty,Mahavirnagar Himatnagar 383001</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>info@easyeducationhimatnagar.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>9408596107</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Hello! Easy Education Himatnagar, 
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>
              <a href="https://m.facebook.com/story.php?story_fbid=122340196948376&id=105714251944304&locale2=hi_IN&_rdr">
                FACEBOOK
              </a>{" "}
              <span style={{ marginRight: "10px" }}></span>
              <a href="https://www.linkedin.com/in/easy-education-himatnagar-8a8245259/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in">
                LINKEDIN
              </a>{" "}
              <span style={{ marginRight: "10px" }}></span>
              <a href="https://twitter.com/ezeducation">TWITTER</a>{" "}
              <span style={{ marginRight: "10px" }}></span>
              <a href="https://www.youtube.com/channel/UC0LiN6hry9BEAWYZZ5byfzg">
                YOUTUBE
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
