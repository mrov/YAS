import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import requests from "./requests";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      video_id: "",
      search_result: {},
      renderedVideosList: []
    }
  }
  
  async componentWillMount(){
    var response = await requests.search();
    //alert(JSON.stringify(response.data.items[0].id.videoId));
    var video_id = response.data.items[0].id.videoId;
    var videosArray = response.data.items;
    videosArray.shift();
    var filteredVideosArray = videosArray;
    var renderedVideosList = filteredVideosArray.map((video) => {
      return (
        <div className="col-3">
          <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + video.id.videoId} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
      );
    })
    this.setState({renderedVideosList: renderedVideosList,search_result: response.data, video_id: video_id});
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <iframe width="100%" height="600" src={"https://www.youtube.com/embed/" + this.state.video_id} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          {this.state.renderedVideosList}
        </div>
      </div>
    );
  }
}

export default App;
