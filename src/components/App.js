/** @format */

import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {
  state = { result: [], selectedVideo: null };
  componentDidMount() {
    this.onSearchSubmit('react.js');
  }
  onSearchSubmit = async (input) => {
    const response = await youtube.get('./search', {
      params: {
        q: input,
      },
    });
    this.setState({
      result: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onSelectedVideo = (selectedVideo) => {
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <div>
        <div className="container border m-4 mx-auto rounded py-4">
          <div className="text-center">
            <img
              alt="logo"
              src="./img/logo.png"
              className="img-fluid d-inline"
              width={60}
            />
            <h1>Hello Everyone</h1>
            <p>Enjoy yourself and search the video you want 😊</p>
          </div>
          <div className="row">
            <div className="col-12">
              <SearchBar onSearchSubmit={this.onSearchSubmit} />
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <VideoList
                result={this.state.result}
                selectedVideo={this.onSelectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
