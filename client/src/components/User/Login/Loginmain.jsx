// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './styles.module.css';
// import {Link} from 'react-router-dom';

// function Loginmain() {
//   const navigate = useNavigate();

//   const googleAuth = () => {
//     window.open(`${process.env.REACT_APP_API_URL}/auth/google/callback`, '_self');
//   };

// //   const redirectToSignup = () => {
// //     navigate('../Signup/Signupmain.jsx');
// //   };

//   return (
//     <div className={styles.centerContainer}>
//       <div className={styles.container} >
//         <h1 className={styles.heading}>Log in Form</h1>
//         <div className={styles.form_container} >
//           <div className={styles.left}>
//             <img className={styles.img} src="./images/login.jpg" alt="login" />
//           </div>
//           <div className={styles.right}>
//             <h2 className={styles.form_heading}>Members Log in</h2>
//             <input type="text" className={styles.input} placeholder="Email" />
//             <input type="text" className={styles.input} placeholder="Password" />
//             <button className={styles.btn}>Log In</button>
//             <p className={styles.text}>or</p>
//             <button className={styles.google_btn} onClick={googleAuth}>
//               <img src="./images/google.png" alt="google icon" />
//               <span>Sign in with Google</span>
//             </button>
//         <Link to="/signupmain">Sign Up
//         </Link>
//         {/* <p className={styles.text}>
//               New Here ? <button onClick={redirectToSignup}>Sign Up</button>
//             </p> */}
//           </div>
//         </div>
//       </div>
//       </div>
//   );
// }

// export default Loginmain;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Card, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import Back from "../../Common/back/Back"
import './styles.module.css';

const Loginmain = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/Dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/Dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Back title='User Login' />
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Card className="p-4">
        <Card.Body>
          
          <h2 className="mb-3 text-center">Student Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}<br/>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Log In
              </Button>
            </div>
          </Form>

          <br/>
          <hr />

          <div className="text-center">
            <GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignIn} />
          </div>
        </Card.Body>
      </Card><br/>

      <div className="p-4 mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </Container>
    </>
  );
};

export default Loginmain;
