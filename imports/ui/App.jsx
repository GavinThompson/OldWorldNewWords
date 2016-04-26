import React, { Component } from 'react';
 
import TrendBlock from './TrendBlock.jsx';
 
// App component - represents the whole app
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      returnedTrends: false
    };
  }

  getTrendBlocks() {
    return [
      { _id: 1 },
      { _id: 2 },
      { _id: 3 },
      { _id: 4 },
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
