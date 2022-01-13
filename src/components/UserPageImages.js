import React from 'react';
import {
  UserPageImagesContainer,
  UserPageImageWrapper,
} from './styles/UserPage.style';
import CardMedia from '@mui/material/CardMedia';
import { Tabs, Tab, Box } from '@mui/material';

function UserPageImages({ img }) {
  return (
    <>
      <UserPageImagesContainer>
        <UserPageImageWrapper>
          <CardMedia height="300" component="img" src={img} />
        </UserPageImageWrapper>
      </UserPageImagesContainer>
    </>
  );
}

export default UserPageImages;
