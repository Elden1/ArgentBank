import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import './assets/style.scss';

const LogOut = () => {

  const userData = useSelector((state) => state.userData);
  const handleLogOut = () => {
    localStorage.removeItem('userToken');
  };

  if (userData.userIntel === null) {
    return (
        <a href="/" onClick={handleLogOut}  className="main-nav-item">
            <p>loading...</p>
          <FontAwesomeIcon icon={faRightFromBracket} />
          <p>Sign out</p> 
        </a>
      );   
  }

  return (
    <div className='nav-log-out'>
        <Link to="/user" className="main-nav-item">
            <FontAwesomeIcon icon={faCircleUser} />
            <p>{userData.userIntel.firstName}</p>
        </Link>
        <a href="/" onClick={handleLogOut}  className="main-nav-item">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <p>Sign out</p>
        </a>
    </div>
  );    
};

export default LogOut;