import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import Market from './Market';
import { RecentArtWrapper, TitleWrapper } from './styles/Home.style';
import { loadArts } from '../components/actions/artAction';
import { connect } from 'react-redux';

const Home = (props) => {
  // console.log('Home State', props.artworks);

  const [artworks, setArtworks] = useState(props.artworks);
  const [isLoading, setIsLoading] = useState(false);

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
      <Carousel />
      <TitleWrapper>
        <h2>Recent ArtWorks</h2>
      </TitleWrapper>
      <RecentArtWrapper>
        <Market artworks={artworks} isLoading={isLoading} />
      </RecentArtWrapper>
    </>
  );
};

const mapStateToProps = (state) => ({
  artworks: state.artworks,
});

export default connect(mapStateToProps)(Home);
