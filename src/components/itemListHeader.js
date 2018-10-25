import React, { Component } from 'react';
import {connect} from 'react-redux';
import DropdownWrapper from './dropdown';
import {setPageLimitFilter} from '../actions/fitler';

export class ItemListHeader extends Component {
  setPageLimit(e){
    this.props.setPageLimit(e.value);
  }
  render() {
    return (
      <div className="list__header">
        <div className="mx-5"> Show</div> 
        <div className="list__header--button-limit">
          <DropdownWrapper
              options={[10, 15, 20, 25, 30]}
              onChange={this.setPageLimit.bind(this)}
              value={""+this.props.pageLimit}
            />
        </div>
        <div>
        Entries
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pageLimit: state.filters.pageLimit
})

const mapDispatchToProps = (dispatch) => ({
  setPageLimit: (pageLimit) => {
    dispatch(setPageLimitFilter(pageLimit))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemListHeader);
