import React from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from './styles/Navbar.styles';
import ConnectBtn from './ConnectBtn';
import LoginBtn from './LoginBtn';

function NavbarLinks() {
  return (
    <>
      <NavLinks>
        <Link to="explorer">Explorer</Link>
        <Link to="auctions">Auctions</Link>
        <Link to="drops">Drops</Link>
        <Link to="/mynfts">My NFTs</Link>
        <ConnectBtn />
        <Link to="login">{<LoginBtn />}</Link>
      </NavLinks>
    </>
  );
}

export default NavbarLinks;
