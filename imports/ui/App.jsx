import React, { Component } from 'react';
 
import TrendBlock from './TrendBlock.jsx';

let testParagraph = "This is text, this is this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text. This is text, this is this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text. This is text, this is this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text, this is text."
 
// App component - represents the whole app
export default class App extends Component {

  // getInitialState() {
  //   return { 
  //     returnedTrends: "I am here to fuck up your day" 
  //   };
  // }

  constructor(props) {
    super(props);
    this.state = {
      returnedTrends: false
    };
  }

  getTrendBlocks() {
    return [
      { _id: 1, text: testParagraph },
      { _id: 2, text: testParagraph },
      { _id: 3, text: testParagraph },
      { _id: 4, text: testParagraph },
    ];
  }
 
  renderTrends() {

    if ( !this.state.returnedTrends ) {
      
      return (
        <div>
          <p>LOADING....</p>
        </div>
      )

    }else{
      
      return this.getTrendBlocks().map((block) => (
        <TrendBlock key={block._id} paragraph={block} />
      ));

    }


    //   

  }
 
  render() {
    return (
      <div>
        <header>
          <h2 className="title">#OldWorldNewWords</h2>
        </header>

        <div className="container">  
          <div>
            {this.renderTrends()}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {

    let thisApp = this

    Meteor.call("getTwitterTrends", function(error, results) {

      if (results) {

        console.log(results);

        Session.set("returnedTrends", results);
        thisApp.setState({returnedTrends: true});

      }else if (error) {
        console.log("error :(");
        console.log(error)
      }else{
        console.log("uh broken")
      }

    });

    
    $("h2.title")
      .css('opacity', 1).lettering( 'words' )
      .children( "span" ).lettering()
      .children( "span" ).lettering(); 

    }
}
