import React, { Component } from 'react';

class VideoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="suggested-video">
        <div className="thumbnail">
          <img
            alt="thumbnail"
            src={this.props.video.snippet.thumbnails.medium.url}
          />
          <span>17:30</span>
        </div>

        <div className="thumbnail-info">
          <h2>{this.props.video.snippet.title}</h2>
          <div className="channel">{this.props.video.snippet.channelTitle}</div>
          <div className="views">792K views</div>
        </div>
      </div>
    );
  }
}

export default VideoCard;
