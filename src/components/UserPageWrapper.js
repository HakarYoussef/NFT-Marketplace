import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { loadArts } from './actions/artAction';
import UserPage from './UserPage';
import UserPageImages from './UserPageImages';

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
      setArtworks(props.artworks);
      setIsLoading(false);
    }
  }, [props.artworks]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        artworks &&
        artworks
          .filter((art) => art.creatorId === name)

          .map((art) => (
            <div key={art.id}>
              <UserPage
                avatar={art.avatar}
                creatorName={art.creatorName}
                location={art.location}
                collectionNum={art.collectionNum}
                creationsNum={art.creations.length}
                bio={art.bio}
              />
              {art.creations.map((item) => {
                return <UserPageImages img={item.img} />;
              })}
              <UserPageImages />
            </div>
          ))
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  artworks: state.artworks,
});

export default connect(mapStateToProps)(UserPageWrapper);
