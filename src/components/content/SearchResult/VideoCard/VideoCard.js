import React, { Component } from 'react';

class VideoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { video } = this.props;

    return (
      <div className="suggested-video">
        <div className="thumbnail">
          <img
            className="card__video"
            alt="thumbnail"
            src={video.snippet.thumbnails.medium.url}
          />
          <span>17:30</span>
        </div>
  
        <div className="thumbnail-info">
          <h2>Night Photography: Finding your way in the dark</h2>
          <div className="channel">7th Era</div>
          <div className="views">792K views</div>
        </div>
      </div>
    );
  }
};

export default VideoCard;
