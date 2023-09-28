// import React from 'react'
// import Back from "../Common/back/Back"
// import './Dashboard.css'

// const Dashboard = (userDetails) => {
//   const user = userDetails.user;
//   const logout = () => {
// 		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
// 	};
//   return (
//     <div className="centered-card">
//       <Back title="Dashboard" />
//       <div className="DashMain">
//         <h1>Welcome {user.name}</h1>
//         <button className="btn" onClick={logout}>
//           Log Out
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Dashboard


import React from "react";
import { Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../User/context/UserAuthContext";
import Back from "../Common/back/Back"
import './Dashboard.css'

const Dashboard = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("Login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <Back title='User Dashboard' />
      <div className="p-4 box mt-3 text-center">
        
        <h1>Welcome {user && user.displayName}</h1>
        <p>Email: {user && user.email}</p>
        
        {user && user.photoURL && (
          <Image src={user.photoURL} alt="Profile photo" className="rounded-image"/>
        )}<br/>
        
        <div className="d-grid gap-2">
          <Button variant="primary" onClick={handleLogout}>Log out</Button>
        </div>

      </div>
      
    </>
  );
};

export default Dashboard;
