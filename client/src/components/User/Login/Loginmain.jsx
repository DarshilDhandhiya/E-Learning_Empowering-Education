import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import {Link} from 'react-router-dom';

function Loginmain() {
  const navigate = useNavigate();

  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google/callback`, '_self');
  };

//   const redirectToSignup = () => {
//     navigate('../Signup/Signupmain.jsx');
//   };

  return (
    <div className={styles.centerContainer}>
      <div className={styles.container} >
        <h1 className={styles.heading}>Log in Form</h1>
        <div className={styles.form_container} >
          <div className={styles.left}>
            <img className={styles.img} src="./images/login.jpg" alt="login" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.form_heading}>Members Log in</h2>
            <input type="text" className={styles.input} placeholder="Email" />
            <input type="text" className={styles.input} placeholder="Password" />
            <button className={styles.btn}>Log In</button>
            <p className={styles.text}>or</p>
            <button className={styles.google_btn} onClick={googleAuth}>
              <img src="./images/google.png" alt="google icon" />
              <span>Sign in with Google</span>
            </button>
        <Link to="/signupmain">Sign Up
        </Link>
        {/* <p className={styles.text}>
              New Here ? <button onClick={redirectToSignup}>Sign Up</button>
            </p> */}
          </div>
        </div>
      </div>
      </div>
  );
}

export default Loginmain;
