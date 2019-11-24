import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    value: ''
  }

  onSearchChange = (e) => {
    const val = e.target.value;
    this.setState(({value}) => {
      const {onSearchChange} = this.props;
      onSearchChange(val);
      return {
        value: val
      }
    });
  }

  render(){
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.onSearchChange}
      />
    );
  }
};