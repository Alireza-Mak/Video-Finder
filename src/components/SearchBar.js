/** @format */
import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="videoSearch">Video Search</label>
            <input
              type="text"
              className="form-control"
              id="videoSearch"
              onChange={this.onInputChange}
              placeholder="React from scratch"
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
