import React, { Component } from 'react';

export default class CustomFormProgress extends Component {
  render() {
    return (
      <div className="customformprogress">
        { this.props.children }
      </div>
    )
  }
}
