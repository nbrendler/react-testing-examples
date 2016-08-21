import React, {Component} from 'react';

export class ShoppingListView extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderShoppingList = this.renderShoppingList.bind(this);
  }
  addItem(e) {
    const {currentItem, items} = this.state;
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      currentItem: '',
      items: items.concat(currentItem)
    });
  }
  onChange(e) {
    this.setState({
      currentItem: e.target.value
    });
  }
  renderShoppingList() {
    return (
      <ul>
        {
          this.state.items.map((item, i) => {
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
          <input type="text" value={this.state.currentItem} onChange={this.onChange} />
          <button type="submit">Add Item</button>
        </form>
        {this.renderShoppingList()}
      </div>
    );
  }
}

export default ShoppingListView;
