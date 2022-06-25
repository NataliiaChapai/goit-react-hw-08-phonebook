import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={s.nav}>
      <NavLink to="/">
        HOME
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
          >
            Contacts
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;