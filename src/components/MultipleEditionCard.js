import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { styled } from '@mui/styles';

import {
  MultipleCardStyles,
  CardPrice,
  CardEdition,
  CardCreator,
  CardCreatorName,
  CardBtn,
  FirstBlock,
  SecondBlock,
} from './styles/Explorer.style';

const BidButton = styled(Button)({
  background: 'rgba(0, 183, 190,0.1)',
  border: 0,
  borderRadius: 3,
  color: 'rgba(0, 183, 190,1)',
  height: 45,
  padding: '0 30px',
});

const MultipleCard = ({
  artworks,
  isLoading,
  creatorId,
  title,
  priceTez,
  priceUsd,
  edition,
  editions,
  img,
  avatar,
}) => {
  return (
    <>
      <MultipleCardStyles>
        <CardMedia height="400" component="img" src={img} />
        <h3>{title}</h3>
        <FirstBlock>
          <CardPrice>
            <p>Price</p>
            <p>
              ꜩ{priceTez} / ${priceUsd}{' '}
            </p>
          </CardPrice>
          <CardEdition>
            <p>Edition</p>
            <p>
              {edition} of {editions}
            </p>
          </CardEdition>
        </FirstBlock>
        <SecondBlock>
          <CardCreator>
            <p>Creator</p>
            <CardCreatorName>
              <Link
                to={`/user/${creatorId}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img src={avatar} alt="avatar" />
                <p>@{creatorId}</p>
              </Link>
            </CardCreatorName>
          </CardCreator>
          <BidButton>Place Bid</BidButton>
        </SecondBlock>
      </MultipleCardStyles>
    </>
  );
};

export default MultipleCard;
