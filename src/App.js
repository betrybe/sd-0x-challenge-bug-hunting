import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import './css/mainContents.css';

import Header from './components/header/Header';
import VideoPage from './components/content/VideoPage/VideoPage';
import SearchResult from './components/content/SearchResult';
import NotFound from './components/content/NotFound';
import InitialPage from './components/content/InitialPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"><InitialPage /></Route>
          <Route
            path="/watch/:videoId"
            render={(props) => <VideoPage {...props} />}
          />
          <Route
            path="/results/:searchParam"
            render={(props) => <SearchResult {...props} />}
          />
          <Route path="*"><NotFound /></Route>
        </Switch>
      </div>
    );
  }
};

export default App;
