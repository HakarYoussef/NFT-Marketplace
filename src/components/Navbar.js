import React from 'react';
import Logo from './Images/logo.svg';
import NavbarSearch from './NavbarSearch';
import { NavbarStyles } from './styles/Navbar.styles';
import NavbarLinks from './NavbarLinks';
import { Routes, Route, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <NavbarStyles>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <NavbarSearch />
      <NavbarLinks />
    </NavbarStyles>
  );
}
