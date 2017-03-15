import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { GridContainer } from './components/Grid';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <GridContainer />
  </Provider>,
  document.getElementById('root')
);
