import axios from 'axios';

export const loadArts = () => {
  return async (dispatch) => {
    try {
      const artworks = await axios.get(
        'https://raw.githubusercontent.com/HakarYoussef/NFT-Marketplace/master/public/artworks.json'
      );
      return dispatch(setArts(artworks.data));
    } catch (error) {
      console.log('error:', error);
    }
  };
};

export const setArts = (artworks) => ({
  type: 'SET_ARTWORKS',
  artworks,
});
