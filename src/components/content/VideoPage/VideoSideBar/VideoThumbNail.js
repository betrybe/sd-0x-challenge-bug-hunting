import React, { Component } from 'react';

class VideoThumbNail extends Component {
  render() {
    const { handleSelectedVideo } = this.props;
    return (
      <div className="thumbnail">
        <img src={this.props.imageSource} alt="cabin" key={this.props.videoId} onClick={() => handleSelectedVideo(this.props.videoId)} />
        <span>17:30</span>
      </div>
    );
  }
}

export default VideoThumbNail;