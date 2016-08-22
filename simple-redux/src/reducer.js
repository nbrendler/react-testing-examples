export const defaultState = {
  items: [],
  currentItem: ''
};

export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
  case 'ADD_ITEM':
    newState.items = newState.items.concat(action.item);
    return newState;
  case 'SET_CURRENT_ITEM':
    newState.currentItem = action.item;
    return newState;
  default:
    return state;
  }
};
