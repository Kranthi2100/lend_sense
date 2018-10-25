import React, { Component } from 'react';
import ItemList from './itemList';
import ItemPagination from './itemPagination';
import ItemListHeader from './itemListHeader';
export class ItemListContainer extends Component {
  render() {
    return (
      <div className="item__list__container">
        <ItemListHeader />
        <ItemList />
        <ItemPagination />
      </div>
    )
  }
}

export default ItemListContainer;
