import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addItem, setCurrentItem} from './actions';

export class ShoppingListView extends Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderShoppingList = this.renderShoppingList.bind(this);
  }
  addItem(e) {
    e.preventDefault();
    e.stopPropagation();
    const {addItem, currentItem, setCurrentItem} = this.props;

    this.props.addItem(currentItem);
    this.props.setCurrentItem('');
  }
  onChange(e) {
    this.props.setCurrentItem(e.target.value);
  }
  renderShoppingList() {
    return (
      <ul>
        {
          this.props.items.map((item, i) => {
            return <li key={i}>{item}</li>;
          })
        }
      </ul>
    );
  }
  render() {
    return (
      <div className="item-list">
        <form onSubmit={this.addItem}>
          <input type="text" value={this.props.currentItem} onChange={this.onChange} />
          <button type="submit">Add Item</button>
        </form>
        {this.renderShoppingList()}
      </div>
    );
  }
}

ShoppingListView.propTypes = {
  addItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string),
  currentItem: PropTypes.string,
  setCurrentItem: PropTypes.func.isRequired
};

ShoppingListView.defaultProps = {
  items: [],
  currentItem: ''
};

export default connect(
  state => ({
    items: state.items,
    currentItem: state.currentItem
  }),
  dispatch => bindActionCreators({addItem, setCurrentItem}, dispatch)
)(ShoppingListView);
