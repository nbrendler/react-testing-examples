export const defaultState = {
  items: [],
  item: {},
  currentItem: '',
  loading: false,
  error: null
};

export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
  case 'ADD_ITEM':
    newState.items = newState.items.concat(action.item);
    return newState;
  case 'ITEMS_ERROR':
    newState.error = action.error;
    newState.loading = false;
    return newState;
  case 'ITEMS_REQUEST':
    newState.loading = true;
    return newState;
  case 'ITEMS_RESPONSE':
    newState.error = null;
    newState.items = action.payload;
    newState.loading = false;
    return newState;
  case 'SET_CURRENT_ITEM':
    newState.currentItem = action.item;
    return newState;
  default:
    return state;
  }
};
