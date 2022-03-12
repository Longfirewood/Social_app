
import React from 'react';
import { NavLink } from 'react-router-dom';
import ToastComponent from '../Toast/Toast';

import c from './Navbar.module.css'

const Nav = () => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <NavLink activeClassName={c.activeLink} to='/profile'> Profile </NavLink>
      </div>
      <div className={c.item}>
        <NavLink activeClassName={c.activeLink} to='/dialogs'> Dialogs </NavLink>
      </div>
      <div className={c.item}>
        <NavLink activeClassName={c.activeLink} to='/users'> Users </NavLink>
      </div>
      <div className={c.item}>
        <NavLink activeClassName={c.activeLink} to='/news'> News </NavLink>
      </div>

      <div className={c.item}>
        <NavLink activeClassName={c.activeLink} to='/music'> Music </NavLink>
      </div>
      <div className={c.item}>
        <NavLink activeClassName={c.activeLink} to='/settings'> Settings </NavLink>
      </div>

    </nav>
  );
}

export default Nav;