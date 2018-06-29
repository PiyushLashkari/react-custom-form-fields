import React, { Component } from 'react';

export default class CustomCheckbox extends Component {
  render() {
    return (
      <div className="customcheckbox">
        { this.props.children }
      </div>
    )
  }
}
