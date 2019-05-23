import './Videos.css';
import React from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions';
import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoPlayer selectedVideo={this.props.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.props.videos}
                selectVideo={this.props.selectVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { videos, selectedVideo } = state.videos;
  return {
    videos: videos,
    selectedVideo: selectedVideo
  };
};

export default connect(
  mapStateToProps,
  { selectVideo }
)(App);
