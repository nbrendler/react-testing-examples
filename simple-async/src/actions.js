import fetch from 'node-fetch';

export const itemsRequest = () => ({
  type: 'ITEMS_REQUEST'
});

export const itemsResponse = (payload) => ({
  type: 'ITEMS_RESPONSE',
  payload
});

export const itemsError = (error) => ({
  type: 'ITEMS_ERROR',
  error
})

export const fetchItems = () => {
  return dispatch => {
    dispatch(itemsRequest());
    return fetch('http://example.com/items')
      .then(response => response.json())
      .then(json => dispatch(itemsResponse({items: ['classes', 'books']})))
      .catch(error => dispatch(itemsError('something went wrong')))
  }
};
