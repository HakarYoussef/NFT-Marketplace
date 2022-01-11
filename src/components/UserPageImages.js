import React from 'react';
import {
  UserPageImagesContainer,
  UserPageImageWrapper,
} from './styles/UserPage.style';

function UserPageImages({ img }) {
  return (
    <UserPageImagesContainer>
      <UserPageImageWrapper>
        <img src={img} alt="" />
      </UserPageImageWrapper>
    </UserPageImagesContainer>
  );
}

export default UserPageImages;
