import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { loadArts } from './actions/artAction';
import Details from './Details';

const ArtDetail = (props) => {
  const [artworks, setArtworks] = useState(props.artworks);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

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
        artworks.map((art) => {
          return (
            <React.Fragment>
              {art.creations
                .filter((item) => item.id === id)
                .map((item) => {
                  return (
                    <Details
                      key={item.id}
                      title={item.title}
                      edition={item.edition}
                      editions={item.editions}
                      desc={item.desc}
                      priceTez={item.priceTez}
                      img={item.img}
                      creatorId={art.creatorId}
                      owner={item.owner}
                      avatar={art.avatar}
                      ownerAvatar={item.ownerAvatar}
                      collection={item.collection}
                    />
                  );
                })}
            </React.Fragment>
          );
        })
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  artworks: state.artworks,
});

export default connect(mapStateToProps)(ArtDetail);
