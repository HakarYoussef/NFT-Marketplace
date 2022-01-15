import axios from 'axios';

export const loadArts = () => {
  return async (dispatch) => {
    try {
      const artworks = await axios.get(
        'https://nft-marketplace-77bfd-default-rtdb.europe-west1.firebasedatabase.app/'
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
