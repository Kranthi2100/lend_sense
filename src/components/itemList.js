import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/lib/Table';
import { getTableDataFromServer } from '../actions/table';
import {tableFilter} from '../selectors/table';

export class ItemList extends Component {
  componentDidMount(){
    this.props.getTableDataFromServer();
  }
  render() {

    return (
      <div className="item__list">
      <Table striped hover>
        <thead>
         <tr>
          <th>Keywords</th>
          <th>Position</th>
          <th>Change</th>
          <th>URL</th>
         </tr>
        </thead>
        <tbody>
          {
            this.props.tableItems.map((item, index) => (
                <tr key={index}>
                  <td>{item['keyword']}</td>
                  <td>{item['position']}</td>
                  <td>{item['change']}</td>
                  <td>{'/research-report/asia-specific'}</td>
                </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tableItems: tableFilter(
                state.table.data.data, 
                state.filters.currentPage, 
                state.filters.pageLimit
              )
})


const mapDispatchToProps = (dispatch) => ({
  getTableDataFromServer: () => {
    dispatch(getTableDataFromServer())
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
