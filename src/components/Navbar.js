import React from 'react';
import Logo from './Images/logo.svg';
import NavbarSearch from './NavbarSearch';
import { NavbarStyles } from './styles/Navbar.styles';
import NavbarLinks from './NavbarLinks';
import { Link } from 'react-router-dom';

export default function Navbar({ themes }) {
  return (
    <NavbarStyles>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <NavbarSearch />

      <NavbarLinks />
      <div>{themes}</div>
    </NavbarStyles>
  );
}
