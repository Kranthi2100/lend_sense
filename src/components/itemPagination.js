import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { setCurrentPageFilter } from '../actions/fitler';

export class ItemPagination extends Component {
  handlePageClick(page){
    this.props.setCurrentPageFilter(page.selected + 1);
  }
  render() {
    return (
      <div className="pagination__container">
        <ReactPaginate
          pageCount={this.props.totalPageCount}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick.bind(this)}
          marginPagesDisplayed={1}
          breakLabel={"-"}
          previousLabel={"previous"}
          nextLabel={"next"}
          forcePage={1}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  totalPageCount: (state.table.data.data) 
                      ? (Math.ceil(state.table.data.data.length / state.filters.pageLimit))
                      : 10
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentPageFilter: (pageNo) => {
    dispatch(setCurrentPageFilter(pageNo))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemPagination);
