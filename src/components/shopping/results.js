import React, { Component } from 'react';

class Results extends Component {
  constructor(props){
    super(props)
  }

  render() {
    if ( this.props.basket ){
    return (
      <div className="shopping-results">
        <p> Results Table: { this.props.basket } </p>
      </div>
    );
  } else {
    return(
      <p>Nothing Here!</p>
    )
  }
  }
}

export default Results;
