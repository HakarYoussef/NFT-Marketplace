import React from 'react';
import {
  BioWrapper,
  CCWrapper,
  Collections,
  Creations,
  GlobalIcon,
  InstaIcon,
  LocationWrapper,
  SocialLinkWrapper,
  TwitterIcon,
  UserDetails,
  UserLeftSide,
  UserNameWrapper,
  UserProfileWrapper,
  UserWrapper,
} from './styles/UserPage.style';
import { LocationIcon } from './styles/UserPage.style';

function UserPage({
  avatar,
  creatorId,
  creatorName,
  location,
  collectionNum,
  creationsNum,
  bio,
}) {
  return (
    <>
      <UserProfileWrapper>
        <UserLeftSide>
          <UserDetails>
            <UserWrapper>
              <img src={avatar} alt="avatar" />
              <UserNameWrapper>
                <h1>{creatorName}</h1>
                <h3>@{creatorId}</h3>
              </UserNameWrapper>
            </UserWrapper>
            <LocationWrapper>
              <LocationIcon /> <p>{location}</p>
            </LocationWrapper>
            <CCWrapper>
              <Collections>
                <p>COLLECTIONS</p>
                <h1>{collectionNum}</h1>
              </Collections>
              <Creations>
                <p>CREATIONS</p>
                <h1>{creationsNum}</h1>
              </Creations>
            </CCWrapper>
            <SocialLinkWrapper>
              <GlobalIcon />
              <TwitterIcon />
              <InstaIcon />
            </SocialLinkWrapper>
            <BioWrapper>
              <p>{bio}</p>
            </BioWrapper>
          </UserDetails>
        </UserLeftSide>
      </UserProfileWrapper>
    </>
  );
}

export default UserPage;
