import React from 'react';
import './assets/style.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bankLogo from './assets/argentBankLogo.webp';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import SignOutButton from '../../Components/LogOut';

const Header = ({ isAuthenticated, userData }) => {
  return (
    <nav className='main-nav'>
      <Link to="/">
        <img
          className='main-nav-logo-image'
          src={bankLogo}
          alt='Argent Bank Logo'
        />
      </Link>

      {isAuthenticated ? (
  userData.userIntel && userData.userIntel.firstName ? (
    <>
    <SignOutButton
    isAuthenticated={true} 
    userData={userData}/>
          </>
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <>
        <a className="main-nav-item" href="/login">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign in
         </a>
        </>
    )}
    </nav>
  );
};

export default Header;