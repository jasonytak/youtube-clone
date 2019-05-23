import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions';

class SearchBar extends React.Component {
  state = { term: '' };

  componentDidMount() {
    this.props.fetchVideos('Dodgers');
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchVideos(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              onChange={this.onInputChange}
              type="text"
              placeholder="Search"
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchVideos }
)(SearchBar);
