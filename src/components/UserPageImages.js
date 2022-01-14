import React from 'react';
import {
  UserPageImagesContainer,
  UserPageImageWrapper,
} from './styles/UserPage.style';
import CardMedia from '@mui/material/CardMedia';
import { Tabs, Tab, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  media: {
    borderRadius: '3px',
    transition: 'transform 0.2s ease',

    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
});

function UserPageImages({ img, id }) {
  const classes = useStyles();
  return (
    <>
      <UserPageImagesContainer>
        <UserPageImageWrapper>
          <Link to={`/${id}`}>
            <CardMedia
              className={classes.media}
              height="300"
              component="img"
              src={img}
            />
          </Link>
        </UserPageImageWrapper>
      </UserPageImagesContainer>
    </>
  );
}

export default UserPageImages;
