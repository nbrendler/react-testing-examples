import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchItems} from './actions';

export class ShoppingListView extends Component {
  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div className="item-list">
      </div>
    );
  }
}

ShoppingListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  currentItem: PropTypes.string,
  fetchItems: PropTypes.func.isRequired
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
  (dispatch) => ({
    fetchItems: bindActionCreators(fetchItems, dispatch)
  })
)(ShoppingListView);
