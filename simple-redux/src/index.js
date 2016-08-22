import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import ShoppingListView from './shopping-list-view';
import reducer from './reducer';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ShoppingListView />
  </Provider>,
  document.getElementById('react-view')
);
