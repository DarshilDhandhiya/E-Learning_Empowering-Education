// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import styles from './styles.module.css';
// import {Link} from 'react-router-dom';


// function Signupmain() {
//   const navigate = useNavigate();

//   const googleAuth = () => {
//     window.open(`${process.env.REACT_APP_API_URL}/auth/google/callback`, '_self');
//   };

// //   const redirectToLogin = () => {
// //     navigate('../Login/Loginmain.jsx');
// //   };

//   return (
//     <div className={styles.centerContainer}>
//       <div className={styles.container}>
//         <h1 className={styles.heading}>Sign up Form</h1>
//         <div className={styles.form_container}>
//           <div className={styles.left}>
//             <img className={styles.img} src="./images/signup.jpg" alt="signup" />
//           </div>
//           <div className={styles.right}>
//             <h2 className={styles.form_heading}>Create Account</h2>
//             <input type="text" className={styles.input} placeholder="Username" />
//             <input type="text" className={styles.input} placeholder="Email" />
//             <input type="password" className={styles.input} placeholder="Password" />
//             <button className={styles.btn}>Sign Up</button>
//             <p className={styles.text}>or</p>
//             <button className={styles.google_btn} onClick={googleAuth}>
//               <img src="./images/google.png" alt="google icon" />
//               <span>Sign up with Google</span>
//             </button>
//         <Link to="/loginmain">Log In
//         </Link>
//             {/* <p className={styles.text}>
//               Already Have an Account ? <button onClick={redirectToLogin}>Log In</button>
//             </p> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signupmain;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Card, Container, Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Back from "../../Common/back/Back";
import styles from './styles.module.css'; // Import the CSS styles

const Signupmain = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/Loginmain");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Back title='User Signup' />
    
    <Container className={`d-flex justify-content-center align-items-center ${styles.centerContainer}`}>
      <Card className={styles.container}>
        <Card.Body>

          <h2 className={styles.heading}>Create Account</h2>
          {error && <Alert variant="danger">{error}</Alert>}<br/>
          
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} className={styles.input} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className={styles.input} />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit" className={styles.btn}>Sign Up</Button>
            </div>

          </Form>
          
        </Card.Body>
      </Card>
      <br/>
      <div className={styles.text}>
            Already have an account? <Link to="/Loginmain">Log In</Link>
      </div>
    </Container>
    </>
  );
};

export default Signupmain;
