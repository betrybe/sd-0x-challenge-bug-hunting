import React, { Component } from 'react';

class VideoThumbNailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div class="thumbnail-info">
        <h2>Night Photography: Finding your way in the dark</h2>
        <div class="channel">7th Era</div>
        <div class="views">792K views</div>
      </div>
    );
  }
}

export default VideoThumbNailInfo;