import React, { useEffect, useState } from 'react';
import IndividualMarketPage from './IndividualMarketPage';
import { loadArts } from './actions/artAction';
import { connect } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import SingleEditionCard from './SingleEditionCard';
import MultipleCard from './MultipleEditionCard';
import { IndiviualMarketStyles } from './styles/UserPage.style';
import Market from './Market';

function IndividualMarket(props) {
  const [artworks, setArtworks] = useState(props.artworks);
  const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams();

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
          .map((art) => {
            return art.creations.map((item) => {
              return (
                <React.Fragment>
                  <IndiviualMarketStyles>
                    <Link
                      to={`/${item.id}`}
                      style={{
                        cursor: 'default',
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <SingleEditionCard
                        key={item.id}
                        creatorId={art.creatorId}
                        title={item.title}
                        priceTez={item.priceTez}
                        priceUsd={item.priceUsd}
                        avatar={art.avatar}
                        img={item.img}
                        edition={item.edition}
                        editions={item.editions}
                      />
                    </Link>
                  </IndiviualMarketStyles>
                </React.Fragment>
              );
            });
          })
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  artworks: state.artworks,
});

export default connect(mapStateToProps)(IndividualMarket);
