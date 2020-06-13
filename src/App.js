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
        <VideoPage videoData={this.state.videoData} videoId="Lf-m1puDxZs"/>
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






// etag: "riV1O4itc9zuPPV64bGVI_5ug1A"
// id: "UgxIk11ciF1oakTCSeh4AaABAg"
// kind: "youtube#commentThread"
// snippet:
// canReply: true
// isPublic: true
// topLevelComment:
// etag: "bUb4GppLsUk3SsSq6EOupRTpdAw"
// id: "UgxIk11ciF1oakTCSeh4AaABAg"
// kind: "youtube#comment"
// snippet: {videoId: "Lf-m1puDxZs", textDisplay: "Ficou show demais a matéria!!!!↵Orgulho demais de fazer parte desse momento s2", textOriginal: "Ficou show demais a matéria!!!!↵Orgulho demais de fazer parte desse momento s2", authorDisplayName: "EddyeBoy Gamer", authorProfileImageUrl: "https://yt3.ggpht.com/a/AATXAJyur8uJC6EJ-lNjcMG7vAgZHyx3HuXnZ9X8-w=s48-c-k-c0xffffffff-no-rj-mo", …}
// __proto__: Object
// totalReplyCount: 1
// videoId: "Lf-m1puDxZs"