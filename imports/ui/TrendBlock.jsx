import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class TrendBlock extends Component {
  render() {
    return (
      <p>{this.props.paragraph.text}</p>
    );
  }
}
 
TrendBlock.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  paragraph: PropTypes.object.isRequired,
};