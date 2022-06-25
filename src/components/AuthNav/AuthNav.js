import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={s.authNav}>
      <NavLink
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
}