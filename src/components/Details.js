import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {
  CreatorName,
  CreatorWrapper,
  DetailsBtn,
  DetailsStyles,
  DetailsWrapper,
  ImageWrapper,
  LeftSideWrapper,
  OwnerName,
  OwnerWrapper,
  PriceWrapper,
  RightSideWrapper,
} from './styles/Explorer.style';

const Details = ({
  title,
  edition,
  editions,
  desc,
  priceTez,
  img,
  creatorId,
  owner,
  collection,
  avatar,
  ownerAvatar,
}) => {
  return (
    <DetailsWrapper>
      <DetailsStyles>
        <LeftSideWrapper>
          <h3>{title}</h3>
          <h4>
            {edition} of {editions}
          </h4>
          <hr />
          <h4>{desc}</h4>
          <PriceWrapper>
            <p>Listing Price</p>
            <h4>ꜩ {priceTez}</h4>
          </PriceWrapper>
          <DetailsBtn>Collect</DetailsBtn>
        </LeftSideWrapper>
        <ImageWrapper>
          <CardMedia height="600" component="img" src={img} />
        </ImageWrapper>
        <RightSideWrapper>
          <CreatorWrapper>
            <img src={avatar} alt="avatar" />
            <CreatorName>
              <h4>@{creatorId}</h4>
              <p>Creator</p>
            </CreatorName>
          </CreatorWrapper>

          <OwnerWrapper>
            <img src={ownerAvatar} alt="avatar" />
            <OwnerName>
              <h4>@{owner}</h4>
              <p>Owner</p>
            </OwnerName>
          </OwnerWrapper>
          <hr />
          <h4>{collection}</h4>
          <p>Collection</p>
          <h4>224</h4>
          <p>Views</p>
        </RightSideWrapper>
      </DetailsStyles>
    </DetailsWrapper>
  );
};

export default Details;
