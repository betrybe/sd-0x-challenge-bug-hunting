import React, { Component, Fragment } from 'react';
import VideoThumbNail from './VideoThumbNail';
import VideoThumbNailInfo from './VideoThumbNailInfo';

class VideoSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="suggested-video">
        <VideoThumbNail />
        <VideoThumbNailInfo />
      </div>
    );
  }
}

export default VideoSideBar;