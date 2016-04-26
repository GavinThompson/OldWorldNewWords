import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class TrendBlock extends Component {

  generateParagraph() {

    var wordsandshit = Session.get("returnedTrends").join(" ");
    return (
      <p>{wordsandshit}</p>
    )
  };

  render() {
    return (
      <div>{this.generateParagraph()}</div>
    );
  }

}
 
TrendBlock.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  paragraph: PropTypes.object.isRequired,
};