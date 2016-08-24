import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import ShoppingListView from './shopping-list-view';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <ShoppingListView />
  </Provider>,
  document.getElementById('react-view')
);
