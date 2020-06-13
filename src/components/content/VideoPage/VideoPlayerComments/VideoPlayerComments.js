import React, { Component } from 'react';
import VideoPlayerCommentsInfo from './VideoPlayerCommentsInfo';
import VideoPlayerUserComments from './VideoPlayerUsersComments';

import '../../../../css/comments.css';

class VideoPlayerComments extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <section className="comments">
        <VideoPlayerCommentsInfo />
        <VideoPlayerUserComments />
      </section>
    );
  }
}

export default VideoPlayerComments;