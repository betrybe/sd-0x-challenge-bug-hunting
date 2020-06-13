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
      videoData: []
    }

    this.handleSearchInput = this.handleSearchInput.bind(this) // remover e tornar um bug
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this)
  }


  async handleSubmitSearch() {
    try {
      const response = await searchVideos(this.state.searchInput);
      this.setState({ videoData: response.items });

    } catch (error) {
      console.log(error)
    }
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
          handleSubmit={this.handleSubmitSearch}
        />
        <Switch>
          <Route
            exact path='/watch/:videoId'
            render={props => <VideoPage {...props} />}
          />
        </Switch>
      </div >
    );
  }
}

export default App;
