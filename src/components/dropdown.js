import React, { Component } from 'react';
import Dropdown from 'react-dropdown';

export class DropdownWrapper extends Component {

  render() {
  
    return (
      <div>
        <Dropdown
          options={this.props.options} 
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    )
  }
}

export default DropdownWrapper;
