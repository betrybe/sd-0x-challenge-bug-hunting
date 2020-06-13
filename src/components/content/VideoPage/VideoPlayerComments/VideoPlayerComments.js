import React, { Component } from 'react';
import VideoPlayerCommentsInfo from './VideoPlayerCommentsInfo';
import VideoPlayerUserComments from './VideoPlayerUsersComments';


class VideoPlayerComments extends Component {
  render() {
    const { statisticsInfo, videoComments } = this.props;
    return (
      <section className="comments">
        <VideoPlayerCommentsInfo statisticsInfo={statisticsInfo}/>
        <VideoPlayerUserComments videoComments={videoComments}/>
      </section>
    );
  }
}

export default VideoPlayerComments;