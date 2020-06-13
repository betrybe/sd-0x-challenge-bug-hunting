import React, { Component } from 'react';

import { searchVideos } from '../../../api/service';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: '',
    };
  }

  async componentDidMount() {
    const {
      params: { searchParam },
    } = this.props.match;

    try {
      const response = await searchVideos(searchParam);
      this.setState({ data: response.items });
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

    return (
      <div>
        {this.renderLoading()}
        Olar
      </div>
    );
  }
}

export default SearchResult;
