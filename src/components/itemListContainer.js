import React, { Component } from 'react'
import ItemList from './itemList';
import ItemPagination from './itemPagination';
export class ItemListContainer extends Component {
  render() {
    return (
      <div className="item__list__container">
        <ItemList />
        <ItemPagination />
      </div>
    )
  }
}

export default ItemListContainer;
