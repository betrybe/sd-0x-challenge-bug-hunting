import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import VideoPage from './components/content/VideoPage/VideoPage';
import { searchVideos } from './api/service'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      searchInput: '',
      videoData: null
    }

    this.handleSearchInput = this.handleSearchInput.bind(this) // remover e tornar um bug
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this)
  }


  async handleSubmitSearch() {
    const response = await searchVideos(this.state.searchInput);
    this.setState({ videoData: response.items });

  }

  handleSearchInput(event) {
    this.setState({ searchInput: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <Header
          handleSearchInput={this.handleSearchInput}
          handleSubmit={this.handleSubmitSearch}
        />
        {this.state.videoData ? <VideoPage videoData={this.state.videoData} videoId="Lf-m1puDxZs"/> : null}
        {/* <Switch>
          <Route
            exact path='/watch/:videoId'
            render={props => <VideoPage {...props} />}
          />
        </Switch> */}
      </div >
    );
  }
}

export default App;
