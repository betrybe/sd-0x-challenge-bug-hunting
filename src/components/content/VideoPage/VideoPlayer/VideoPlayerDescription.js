import React, { Component } from 'react';

class VideoPlayerDescription extends Component {

  render() {
    return (
      <section className="channel-info">
        <div className="avatar">
          <div></div>
        </div>
        <div className="description">
          <h2>Corey Shafer</h2>
          <h3>Published on Feb 5, 2016</h3>
          <p>In this episode of on the road, I spend the morning hiking through and photographing two beautiful slot
          canyons near Escalante, Utah. I then drive back to my campsite, make a nice dinner, and head out again to
          shoot some night photos. This is great way to learn night Photography and anyone interested will bne
            surprised the number of images I</p>
          <p className="show-more">show more</p>
        </div>
        <div className="subscribe">
          <button> subscribe <span>293K</span></button>
        </div>
      </section>
    );
  }
}

export default VideoPlayerDescription;