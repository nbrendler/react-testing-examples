import React from 'react';
import {assert} from 'chai';
import sinon from 'sinon';

import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';

import {ShoppingListView} from '../src/shopping-list-view';

const noop = () => {};

const renderComponent = (props) => {
  return renderIntoDocument(
    <ShoppingListView
      addItem={noop}
      setCurrentItem={noop}
      {...props}
    />
  );
};

describe('the shopping list view', () => {
  it('should be empty initially', () => {
    const component = renderComponent();
    assert.throws(() => findRenderedDOMComponentWithTag(component, 'li'));
  });
  it('should add a todo when I click the button', () => {
    let addItem = sinon.spy();
    let currentItem = 'Milk';
    const component = renderComponent({addItem, currentItem});

    let button = findRenderedDOMComponentWithTag(component, 'button');

    Simulate.submit(button);

    assert.isTrue(addItem.calledWith('Milk'));
  });
  it('should render multiple items', () => {
    const component = renderComponent({items: ['Milk', 'Eggs']});

    let items = scryRenderedDOMComponentsWithTag(component, 'li');
    assert.lengthOf(items, 2);
    assert.deepEqual(items.map(item => item.textContent), ['Milk', 'Eggs']);
  });
  it('should clear the value of the input after adding an item', () => {
    let addItem = sinon.spy();
    let setCurrentItem = sinon.spy();
    let currentItem = 'Milk';
    const component = renderComponent({addItem, currentItem, setCurrentItem});

    let button = findRenderedDOMComponentWithTag(component, 'button');

    Simulate.submit(button);

    assert.isTrue(setCurrentItem.calledWith(''));
  });
});
