import React, { Component, Fragment } from 'react';

class VideoPlayerCommentsInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <div className="comment-toolbar">
          <div className="comment-count">
            <span>2,957</span>
            <span>Comments</span>
          </div>
          <div className="comment-count">
            <i className="material-icons">sort</i>
            <span>SORT BY</span>
          </div>
        </div>
        <div className="add-comment">
          <i className="material-icons account-icon">account_circle</i>
          <input type="text" placeholder="Add a public comment..." />
        </div>
      </Fragment>
    );
  }
}

export default VideoPlayerCommentsInfo;