import React, { Component } from 'react'
import { connect } from 'react-redux';
import Graph from './graph';
import DropdownWrapper from './dropdown';
import { getGraphDataFromServer } from '../actions/graph';
import { setTimeFilter, setKeywordFilter } from '../actions/fitler';
import { graphFilter } from '../selectors/graph';

class GraphContainer extends Component {
  onTimeFilterChange(e) {
    this.props.setTimeFilter(e.value);
  }

  onKeywordFilterChange(e) {
    this.props.setKeywordFilter(e.value);
  }

  componentDidMount() {
    this.props.getGraph()
  }

  render() {

    const timeFilter = [
      '2 days',
      '4 days',
      'one week'
    ]

    return (
      <div className="graph__container">
        <div className="graph__container--controller">
          <DropdownWrapper
            options={timeFilter}
            onChange={this.onTimeFilterChange.bind(this)}
            value={this.props.timeFilter}
          />
          <DropdownWrapper
            options={this.props.keywords}
            onChange={this.onKeywordFilterChange.bind(this)}
            value={this.props.keywordFilter}
          />
          <Graph 
            data={this.props.data} 
            keywords={this.props.keywords}
            selected = {this.props.keywordFilter}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...graphFilter(state.graph.data, state.filters),
  timeFilter: state.filters.timeFilter,
  keywordFilter: state.filters.keywordFilter
})

const mapDispatchToProps = (dispatch) => ({
  getGraph: () => {
    dispatch(getGraphDataFromServer())
  },
  setTimeFilter: (time) => {
    dispatch(setTimeFilter(time));
  },
  setKeywordFilter: (keyword) => {
    dispatch(setKeywordFilter(keyword));
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer);
