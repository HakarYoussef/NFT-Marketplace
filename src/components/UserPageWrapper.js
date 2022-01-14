import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { loadArts } from './actions/artAction';
import LoadingSpinner from './LoadingSpinner';
import {
  UserPageImgContainer,
  UserPageSeeMore,
  UserPageWrapperStyle,
  UserRightSide,
} from './styles/UserPage.style';
import UserPage from './UserPage';
import UserPageImages from './UserPageImages';
import UserProfileTabs from './UserProfileTabs';
import CollectedArts from './CollectedArts';
import { Link } from 'react-router-dom';

const UserPageWrapper = (props) => {
  const [artworks, setArtworks] = useState(props.artworks);
  const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams();
  // console.log('hey', useParams());

  useEffect(() => {
    setIsLoading(true);
    props.dispatch(loadArts());
  }, []);

  useEffect(() => {
    if (props.artworks.length > 0) {
      setTimeout(() => {
        setArtworks(props.artworks);
        setIsLoading(false);
      }, 2000);
    }
  }, [props.artworks]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        artworks &&
        artworks
          .filter((art) => art.creatorId === name)

          .map((art) => (
            <UserPageWrapperStyle key={art.id}>
              <UserPage
                avatar={art.avatar}
                creatorName={art.creatorName}
                creatorId={art.creatorId}
                location={art.location}
                collectionNum={art.collectionNum}
                creationsNum={art.creations.length}
                bio={art.bio}
              />
              <UserRightSide>
                <UserProfileTabs
                  created={
                    <UserPageImgContainer>
                      {art.creations.slice(0, 4).map((item) => {
                        return (
                          <UserPageImages
                            key={item.id}
                            img={item.img}
                            id={item.id}
                          />
                        );
                      })}
                    </UserPageImgContainer>
                  }
                  collected={<CollectedArts />}
                />
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`/${art.creatorId}/marketplace`}
                >
                  <UserPageSeeMore>
                    <h4> See more from</h4>
                    <p>@{art.creatorId}</p>
                  </UserPageSeeMore>
                </Link>
              </UserRightSide>
            </UserPageWrapperStyle>
          ))
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  artworks: state.artworks,
});

export default connect(mapStateToProps)(UserPageWrapper);
