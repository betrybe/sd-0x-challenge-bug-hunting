import React, { Component } from 'react';
import VideoPlayerCommentsInfo from './VideoPlayerCommentsInfo';
import VideoPlayerUserComments from './VideoPlayerUsersComments';


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