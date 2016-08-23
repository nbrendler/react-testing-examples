import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addItem, setCurrentItem} from './actions';

import ItemList from './item-list';

export class ShoppingListView extends Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.onChange = this.onChange.bind(this);
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
  render() {
    return (
      <div className="item-list">
        <form onSubmit={this.addItem}>
          <input type="text" value={this.props.currentItem} onChange={this.onChange} />
          <button type="submit">Add Item</button>
        </form>
        <ItemList />
      </div>
    );
  }
}

ShoppingListView.propTypes = {
  addItem: PropTypes.func.isRequired,
  currentItem: PropTypes.string,
  setCurrentItem: PropTypes.func.isRequired
};

ShoppingListView.defaultProps = {
  currentItem: ''
};

export default connect(
  state => ({
    currentItem: state.currentItem
  }),
  dispatch => bindActionCreators({addItem, setCurrentItem}, dispatch)
)(ShoppingListView);
