import React from 'react';
import axios from 'axios';
import Back from "../Common/back/Back"

const Login = () => {
  const handleLogin = async () => {
    try {
      const response = await axios.get('/auth');
      // Handle the response as needed
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <div>
      <Back title='Login' />
      <button onClick={handleLogin}>Login With Google</button>
    </div>
  );
};

export default Login;

