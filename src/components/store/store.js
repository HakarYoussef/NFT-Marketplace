import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import artReducer from '../reducers/artReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    artworks: artReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
