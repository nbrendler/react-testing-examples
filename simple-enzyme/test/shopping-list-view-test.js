import React from 'react';
import {assert} from 'chai';
import sinon from 'sinon';

import {shallow} from 'enzyme';

import {ShoppingListView} from 'shopping-list-view';

const noop = () => {};

const shallowRender = (props) => {
  return shallow(
    <ShoppingListView
      addItem={noop}
      setCurrentItem={noop}
      {...props}
    />
  );
};

describe('the shopping list view', () => {
  it('should render an Add Item button', () => {
    const wrapper = shallowRender();

    let button = wrapper.find('button');
    assert.equal(button.text(), 'Add Item');
  });
  it('should add a todo when I click the button', () => {
    let addItem = sinon.spy();
    let currentItem = 'Milk';
    const wrapper = shallowRender({addItem, currentItem});

    wrapper.find('button').simulate('submit');

    assert.isTrue(addItem.calledWith('Milk'));
  });
});
