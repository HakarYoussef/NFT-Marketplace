import React, { Suspense, useState, useRef, useEffect } from 'react';
import FilterBtn from './FilterBtn';
import LatestBtn from './LatestBtn';
import { loadArts } from '../components/actions/artAction';
import _ from 'lodash';
import ExplorerSearch from './ExplorerSearch';
import { connect } from 'react-redux';
import {
  ExplorerArtworksStyles,
  MarketStyles,
  ExplorerBtns,
} from './styles/Explorer.style';

const Market = React.lazy(() => import('./Market'));

const ExplorerArtworks = (props) => {
  const [artworks, setArtworks] = useState(props.artworks);
  const [sortOrder, setSortOrder] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef();

  // call api to get list of artworks
  useEffect(() => {
    setIsLoading(true);
    props.dispatch(loadArts());

    // initialize debounce function to search once user has stopped typing every half second
    inputRef.current = _.debounce(onSearchText, 500);
  }, []);

  useEffect(() => {
    if (props.artworks.length > 0) {
      setTimeout(() => {
        setArtworks(props.artworks);
        setIsLoading(false);
      }, 2000);
    }
  }, [props.artworks]);

  function onSearchText(text, props) {
    let filtered;
    if (text) {
      filtered = props.artworks.filter((art) =>
        art.creations.some((creation) => creation.title === text)
      );
      // .toLowerCase()
      // .includes(text.toLowerCase());
    } else {
      filtered = props.artworks;
    }
    setArtworks(filtered);
    setSortOrder('');
  }

  function handleSearch(event) {
    inputRef.current(event.target.value, props);
  }

  function handleSort(sortOrder) {
    setSortOrder(sortOrder);
    if (sortOrder.value) {
      setArtworks(_.orderBy(artworks, ['priceTez'], [sortOrder.value]));
    }
  }

  return (
    <>
      <ExplorerSearch handleSearch={handleSearch} />
      <ExplorerArtworksStyles>
        <ExplorerBtns>
          <FilterBtn />
          <LatestBtn handleSort={handleSort} sortOrder={sortOrder} />
        </ExplorerBtns>
        <Suspense fallback={<div>Loading...</div>}>
          <MarketStyles>
            <Market artworks={artworks} isLoading={isLoading} />
          </MarketStyles>
        </Suspense>
      </ExplorerArtworksStyles>
    </>
  );
};
const mapStateToProps = (state) => ({
  artworks: state.artworks,
});

export default connect(mapStateToProps)(ExplorerArtworks);
