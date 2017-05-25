import React, { Component } from 'react';

import Results from './results'
import Search from './search'

class Shopping extends Component {
  render() {
    return (
      <div className="shopping-list">
        <p> This is a shopping list </p>
          <Search />
      </div>
    );
  }
}

export default Shopping;
