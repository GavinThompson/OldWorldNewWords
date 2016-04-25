import React, { Component } from 'react';
 
import TrendBlock from './TrendBlock.jsx';

let testParagraph = "This is text, this is this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text. This is text, this is this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text. This is text, this is this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text."
 
// App component - represents the whole app
export default class App extends Component {


  getTrendBlocks() {
    return [
      { _id: 1, text: testParagraph },
      { _id: 2, text: testParagraph },
      { _id: 3, text: testParagraph },
    ];
  }
 
  renderTrends() {
    return this.getTrendBlocks().map((block) => (
      <TrendBlock key={block._id} paragraph={block} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1 class="title">#OldWorldNewWords</h1>
        </header>
 
        <div>
          {this.renderTrends()}
        </div>
      </div>
    );
  }
}