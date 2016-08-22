import {assert} from 'chai';

import {addItem, setCurrentItem} from 'actions';

describe('the shopping list action creators', () => {
  describe('addItem', () => {
    it('should create an ADD_ITEM action', () => {
      let action = addItem('Milk');
      assert.equal(action.type, 'ADD_ITEM');
      assert.equal(action.item, 'Milk');
    });
  });
  describe('setCurrentItem', () => {
    it('should create a SET_CURRENT_ITEM action', () => {
      let action = setCurrentItem('Eggs');
      assert.equal(action.type, 'SET_CURRENT_ITEM');
      assert.equal(action.item, 'Eggs');
    });
  });
});
