import React from 'react';
import CardMedia from '@mui/material/CardMedia';
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
  CollectionStyles,
  ViewsStyles,
} from './styles/Explorer.style';
import { Link } from 'react-router-dom';

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
              <Link
                style={{ textDecoration: 'none' }}
                to={`/user/${creatorId}`}
              >
                <h4>@{creatorId}</h4>
              </Link>
              <p>Creator</p>
            </CreatorName>
          </CreatorWrapper>

          <OwnerWrapper>
            <img src={ownerAvatar} alt="avatar" />
            <OwnerName>
              {' '}
              <Link style={{ textDecoration: 'none' }} to={`/user/${owner}`}>
                <h4>@{owner}</h4>
              </Link>
              <p>Owner</p>
            </OwnerName>
          </OwnerWrapper>
          <hr />
          <CollectionStyles>
            <h4>{collection}</h4>
            <p>Collection</p>
          </CollectionStyles>

          <ViewsStyles>
            <h4>224</h4>
            <p>Views</p>
          </ViewsStyles>
        </RightSideWrapper>
      </DetailsStyles>
    </DetailsWrapper>
  );
};

export default Details;
