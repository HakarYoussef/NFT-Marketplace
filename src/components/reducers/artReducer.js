const artReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ARTWORKS':
      return [...state, ...action.artworks];
    default:
      return state;
  }
};

export default artReducer;
