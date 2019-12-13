import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer/rootReducer';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appliedMiddleware = composeEnhancers(
  applyMiddleware(...middleware)
);

export const store = createStore(rootReducer, appliedMiddleware);
