import React, { Component } from 'react';
import VideoThumbNail from './VideoThumbNail';
import VideoThumbNailInfo from './VideoThumbNailInfo';

import '../../../../css/sideBar.css';

class VideoSideBar extends Component {
  render() {
    const { relatedVideos } = this.props;
    return (
      <Fragment>
        {
          relatedVideos.map((video) =>
            <div className="suggested-video" key={video.id.videoId}>
              <VideoThumbNail
                videoId={video.id.videoId}
                imageSource={video.snippet.thumbnails.medium.url}

              />
              <VideoThumbNailInfo
              title={video.snippet.title}
              channel={video.snippet.channelTitle}
              />
            </div>
          )
        }
      </Fragment>
    );
  }
}

export default VideoSideBar;