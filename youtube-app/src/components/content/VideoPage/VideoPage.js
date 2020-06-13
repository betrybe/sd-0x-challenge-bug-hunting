import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoPlayerDescription from './VideoPlayer/VideoPlayerDescription';
import VideoPlayerInfo from './VideoPlayer/VideoPlayerInfo';
import VideoPlayerComments from './VideoPlayerComments/VideoPlayerComments';
import VideoSideBar from './VideoSideBar/VideoSideBar';

class VideoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <main>
        <section className="player">
          <VideoPlayer />
          <VideoPlayerInfo />
          <VideoPlayerDescription />
          <VideoPlayerComments />
        </section>
        <section className="sidebar">
          <VideoSideBar />
        </section>
      </main>
    );
  }
}

export default VideoPage;