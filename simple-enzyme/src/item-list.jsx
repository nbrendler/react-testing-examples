import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class ItemList extends Component {
  render() {
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
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
};

ItemList.defaultProps = {
  items: [],
};

export default connect(
  state => ({
    items: state.items
  })
)(ItemList);
