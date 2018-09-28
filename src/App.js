import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';
import { Row, Col } from 'reactstrap';

import NavBar from './components/nav_bar';
import SideBar from './components/side_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAgF67gtTQn7yStd6J5WcxFJhyB_DeDsuE';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    this.videoSearch('Learn React');

  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({ videos });
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar onSearchTermChange={term => this.videoSearch(term)} />
        <div className="mainContainer">
          <Row className="mx-0">
            <Col sm="2">
              <SideBar />
            </Col>
            <Col sm="10" className="videoContainer">
              <VideoList videos={this.state.videos} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
