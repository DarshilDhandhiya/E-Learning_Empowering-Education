import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import {Link} from 'react-router-dom';


function Signupmain() {
  const navigate = useNavigate();

  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google/callback`, '_self');
  };

//   const redirectToLogin = () => {
//     navigate('../Login/Loginmain.jsx');
//   };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sign up Form</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/signup.jpg" alt="signup" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.form_heading}>Create Account</h2>
          <input type="text" className={styles.input} placeholder="Username" />
          <input type="text" className={styles.input} placeholder="Email" />
          <input type="password" className={styles.input} placeholder="Password" />
          <button className={styles.btn}>Sign Up</button>
          <p className={styles.text}>or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>Sign up with Google</span>
          </button>
		  <Link to="/loginmain">Log In
			</Link>
          {/* <p className={styles.text}>
            Already Have an Account ? <button onClick={redirectToLogin}>Log In</button>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Signupmain;
