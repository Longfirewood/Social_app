import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css'

const Nav = () => {
    return (

    <nav className={c.nav}>
    <div className={c.item}>
      <NavLink to='/profile' activeClassName={c.activeRoute}> Profile </NavLink>
    </div>
    <div className={c.item}>
    <NavLink to='/dialogs' activeClassName={c.activeRoute}> Dialogs </NavLink>
    </div>
    <div className={c.item}>
      <a href='/news'> News </a>
    </div>
    <div className={c.item}>
      <a href='/music'> Music </a>
    </div>
    <div className={c.item}>
      <NavLink to='/settings'> Settings </NavLink>
    </div>
  </nav>
  );
}

export default Nav;