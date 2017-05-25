import React, { Component } from 'react';
import Results from './results'

class Search extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      "searchResults":"",
    }
  }

  handleChange(event){
    const target = event.target
    this.setState({
      "searchResults":target.value,
    })

  }

  render() {
    return (
      <div className="shopping-search">
        <p> Search Bar </p>
        <input
          type="text"
          placeholder="Search here..."
          value={this.state.searchResults}
          onChange={this.handleChange} />
        <Results basket={this.state.searchResults} />

      </div>
    );
  }
}

export default Search;
