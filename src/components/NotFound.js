import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from './Images/404.svg';
import { NotFoundWrapper } from './styles/NotFound.style';

function NotFound() {
  return (
    <NotFoundWrapper>
      <img src={NotFoundImg} alt="" />
      <h3>Something went WRONG!</h3>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <p>Back to Home Page</p>
      </Link>
    </NotFoundWrapper>
  );
}

export default NotFound;
