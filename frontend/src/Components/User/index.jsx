import React from 'react';
import './assets/style.scss'
import '../../Pages/Login/assets/style.scss'

let User = ({ userData }) => {
    if (userData.userIntel === null) {
      return <p>Loading user data...</p>;
    }
  
    return (
      <h1>
        Welcome back
        <br />
        {userData.userIntel.firstName} {userData.userIntel.lastName}!
      </h1>
    );
  };
  
export default User;