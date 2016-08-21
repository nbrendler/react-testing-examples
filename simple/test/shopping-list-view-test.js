import React from 'react';
import {assert} from 'chai';

import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';

import ShoppingListView from 'shopping-list-view';

describe('the shopping list view', () => {
  it('should be empty initially', () => {
    const component = renderIntoDocument(
      <ShoppingListView />
    );
    assert.throws(() => findRenderedDOMComponentWithTag(component, 'li'));
  });
  it('should add a todo when I click the button', () => {
    const component = renderIntoDocument(
      <ShoppingListView />
    );

    let input = findRenderedDOMComponentWithTag(component, 'input');
    let button = findRenderedDOMComponentWithTag(component, 'button');

    input.value = 'Milk';
    Simulate.change(input);
    Simulate.submit(button);

    let item = findRenderedDOMComponentWithTag(component, 'li');
    assert.equal(item.textContent, 'Milk');
  });
  it('should render multiple todos', () => {
    const component = renderIntoDocument(
      <ShoppingListView />
    );
    component.setState({
      items: [
        'Milk',
        'Eggs'
      ]
    });
    let items = scryRenderedDOMComponentsWithTag(component, 'li');
    assert.lengthOf(items, 2);
    assert.deepEqual(items.map(item => item.textContent), ['Milk', 'Eggs']);
  });
});
