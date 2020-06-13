import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import VideoPage from './components/content/VideoPage/VideoPage';
import { searchVideos } from './api/service'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      searchInput: '',
      videoData: []
    }

    this.handleSearchInput = this.handleSearchInput.bind(this) // remover e tornar um bug
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  async handleSubmit() {
    const response = await searchVideos(this.state.searchInput);
    console.log(response)
    // this.setState({ videoData: response.data });
  }

  handleSearchInput(event) {
    this.setState({ searchInput: event.target.value });
    console.log(this.state.searchInput)
  }

  render() {
    return (
      <div className="App">
        <Header
          handleSearchInput={this.handleSearchInput}
          handleSubmit={this.handleSubmit}
        />
        {this.state.loading ? null : <VideoPage />}
      </div>
    );
  }
}

export default App;
