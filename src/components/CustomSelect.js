import React, { Component } from 'react';

export default class CustomSelect extends Component {
  render() {
    return (
      <div className="customselect">
        { this.props.children }
      </div>
    )
  }
}
