import React, { Component } from 'react';

export default class CustomRadio extends Component {
  render() {
    return (
      <div className="customradio">
        { this.props.children }
      </div>
    )
  }
}
