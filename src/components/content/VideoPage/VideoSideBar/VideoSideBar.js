
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import VideoThumbNail from './VideoThumbNail';
import VideoThumbNailInfo from './VideoThumbNailInfo';

import '../../../../css/sideBar.css';

class VideoSideBar extends Component {
  render() {
    const { relatedVideos, handleSelectedVideo } = this.props; // use function instead of link
    return (
      <Fragment>
        {relatedVideos.map((video) => (
          <Link className="suggested-video link" data-testid='selectedVideo' key={video.etag}
            to={{
              pathname: `/watch/${video.id.videoId}`,
              state: { data: relatedVideos }
            }}>
            <VideoThumbNail
              videoId={video.id.videoId}
              imageSource={video.snippet.thumbnails.medium.url}
            />
            <VideoThumbNailInfo
              title={video.snippet.title}
              channel={video.snippet.channelTitle}
            />
          </Link>
        ))
        }
      </Fragment>
    );
  }
}

export default VideoSideBar;

