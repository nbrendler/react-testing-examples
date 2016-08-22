import {assert} from 'chai';

import reducer, {defaultState} from 'reducer';
import {addItem, setCurrentItem} from 'actions';

describe('the shopping list reducer', () => {
  it('should return the default state when called with undefined', () => {
    let state = reducer(undefined, {});
    assert.equal(state, defaultState);
  });
  it('should add the item to the items state on ADD_ITEM', () => {
    let newState = reducer(defaultState, addItem('Milk'));
    assert.deepEqual(newState.items, ['Milk']);
  });
  it('should update the currentItem state on SET_CURRENT_ITEM', () => {
    let newState = reducer(defaultState, setCurrentItem('Eggs'));
    assert.equal(newState.currentItem, 'Eggs');
    assert.lengthOf(newState.items, 0);
  });
});
