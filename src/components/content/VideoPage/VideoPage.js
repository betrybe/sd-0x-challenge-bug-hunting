import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import VideoPlayerDescription from './VideoPlayer/VideoPlayerDescription';
import VideoPlayerInfo from './VideoPlayer/VideoPlayerInfo';
import VideoPlayerComments from './VideoPlayerComments/VideoPlayerComments';
import VideoSideBar from './VideoSideBar/VideoSideBar';
import { getVideoInfo, getVideoComments } from './../../../api/service';

class VideoPage extends Component {
  constructor(props) {
    super(props);
    const { videoData, videoId } = this.props;

    this.state = {
      videoId: videoId,
      relatedVideos: videoData,
      videoInfo: null,
      videoComments: null
    }
  }

  componentDidMount() {
    getVideoInfo() // add video Id commng from router
      .then(data =>
        this.setState({ videoInfo: data.items[0] })
      );

    getVideoComments() // add video ID commin from router
      .then(data =>
        this.setState({ videoComments: data.items })
      )

  }


  render() {
    console.log(this.state)

    if (!this.state.videoInfo || !this.state.videoComments) return <main></main>
    
    return (
      <main>
        <section className="player">
          <VideoPlayer embedId={this.state.videoId} />
          <VideoPlayerInfo
            statisticsInfo={this.state.videoInfo.statistics}
            title={this.state.videoInfo.snippet.title}
          />
          <VideoPlayerDescription
            channelTitle={this.state.videoInfo.snippet.channelTitle}
            description={this.state.videoInfo.snippet.description}
            publishedAt={this.state.videoInfo.snippet.publishedAt}
          />
          <VideoPlayerComments
            statisticsInfo={this.state.videoInfo.statistics}
            videoComments={this.state.videoComments}
          />
        </section>
        <section className="sidebar">
          <VideoSideBar />
        </section>
      </main>
    );
  }
}

export default VideoPage;