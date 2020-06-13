import React, { Component } from 'react';
import profileIcon from './../../../../assets/profile.jpg'

class VideoPlayerUsersComments extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="comment">
        <div className="comment-avatar">
          <i className="material-icons account-icon">account_circle</i>
        </div>
        <div className="comment-info">
          <h3>Corey Shafer<span>7 seconds ago</span></h3>
          <p>Night Photography back!</p>
          <div>
            <a className="thumb-up-btn">
              <i className="material-icons">thumb_up</i>
              <span className="thumbs-count">2K</span>
            </a>
            <a className="thumb-up-btn">
              <i className="material-icons">thumb_down</i>
              <span className="thumbs-count">10K</span>
            </a>
            <a>REPLY</a>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoPlayerUsersComments;