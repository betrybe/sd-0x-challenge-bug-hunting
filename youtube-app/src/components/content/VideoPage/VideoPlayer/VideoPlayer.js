import React, { Component } from 'react';

class VideoPlayer extends Component {
  render() {
    return ( 
      <div className="youtube-player">
      <iframe width="100%" height="470" src="https://www.youtube.com/embed/paG6a6wlwto" frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
     );
  }
}

export default VideoPlayer;