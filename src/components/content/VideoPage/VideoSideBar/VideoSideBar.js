import React, { Component } from 'react';
import VideoThumbNail from './VideoThumbNail';
import VideoThumbNailInfo from './VideoThumbNailInfo';

import '../../../../css/sideBar.css';

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