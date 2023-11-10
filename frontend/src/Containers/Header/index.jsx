import React from 'react';
import './assets/style.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bankLogo from './assets/argentBankLogo.webp';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import SignOutButton from '../../Components/LogOut';

const Header = () => {
  const isAuthenticated = localStorage.getItem('userToken') !== null;

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
        <SignOutButton />
      ) : (
        <Link to="/login" className="main-nav-item">
          <FontAwesomeIcon icon={faCircleUser} />
          Sign in
        </Link>
      )}
    </nav>
  );
};

export default Header;