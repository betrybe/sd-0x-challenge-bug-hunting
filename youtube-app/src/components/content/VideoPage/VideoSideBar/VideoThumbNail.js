import React, { Component } from 'react';

class VideoThumbNail extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="suggested-video">
        <img src="./assets/cabin.jpg" alt="cabin" />
        <span>17:30</span>
      </div>
    );
  }
}

export default VideoThumbNail;