import React, { Component } from 'react';
import VideoCard from './VideoCard/VideoCard';

import { searchVideos } from '../../../api/service';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: '',
    };
  }

  componentDidMount() {
    const {
      params: { searchParam },
    } = this.props.match;

    try {
      searchVideos(searchParam).then((data) => {
        this.setState({ data: data.items });
      });
    } catch (error) {
      this.setState({ error: error });
    }
  }

  renderLoading() {
    const { data } = this.state;

    if (!data.length) return <div>Loading...</div>;

    return null;
  }

  render() {
    const { data } = this.state;

    console.log(data);

    return (
      <div>
        {this.renderLoading()}

        {data.map((item) => (
          <VideoCard video={item} key={item.etag} />
        ))}
      </div>
    );
  }
}

export default SearchResult;
