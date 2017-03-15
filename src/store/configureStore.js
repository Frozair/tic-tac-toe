import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import reducer from '../reducers/index';

const middleware = [];

// Logger Middleware. This always has to be last
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

middleware.push(loggerMiddleware);

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  return store;
}
