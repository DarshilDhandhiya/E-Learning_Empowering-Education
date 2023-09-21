import React from 'react'
import Back from "../Common/back/Back"
import './dashboard.css'

const Dashboard = (userDetails) => {
  const user = userDetails.user;
  const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};
  return (
    <div className="centered-card">
      <Back title="Dashboard" />
      <div className="DashMain">
        <h1>Welcome {user.name}</h1>
        <button className="btn" onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Dashboard
