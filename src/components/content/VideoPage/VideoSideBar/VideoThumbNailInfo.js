import React, { Component } from 'react';

class VideoThumbNailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="thumbnail">
        <img src="./assets/cabin.jpg" alt="cabin" />
        <span>17:30</span>
      </div>
    );
  }
}

export default VideoThumbNailInfo;