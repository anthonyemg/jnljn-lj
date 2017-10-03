import React from 'react';

import TopMenu from './TopMenu';
import TopMenuMobile from './TopMenuMobile';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: null,
      resultsNumber: 0,
      videoMode: false,
      selectedVideo: null,
      selectedVideoComments: null,
      selectedVideoRelatedVideos: null,
    }
    this.handleVideoListUpdate = this.handleVideoListUpdate.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
    this.handleFetchComments = this.handleFetchComments.bind(this);
    this.handleFetchRelatedVideos = this.handleFetchRelatedVideos.bind(this);
  }

  handleVideoListUpdate(data) {
    this.setState({
      videos: data.items,
      resultsNumber: this.numberWithCommas(data.pageInfo.totalResults),
      selectedVideo: null,
      selectedVideoComments: null,
    })
  }

  numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
  }

  handleSelectVideo(video) {
    this.setState({
      selectedVideo: video,
    })
    this.handleFetchComments(video.id.videoId)
    this.handleFetchRelatedVideos(video.id.videoId);
  }

  handleFetchComments(videoId) {
    fetch('/comments', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({data: videoId}),
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        selectedVideoComments: data.items,
      })
    })
    .catch(err => console.log(err));
  }

  handleFetchRelatedVideos(videoId) {
    fetch('/relatedvideos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({data: videoId}),
    })
    .then(res => res.json())
    .then(data => {
      console.log('wow dude', data.items)
      this.setState({
        selectedVideoRelatedVideos: data.items,
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='App'>

        <TopMenu
          handleVideoListUpdate={this.handleVideoListUpdate} />

        <TopMenuMobile />

        {!this.state.selectedVideo &&
          <VideoList
            videos={this.state.videos}
            resultsNumber={this.state.resultsNumber}
            handleSelectVideo={this.handleSelectVideo}
          />
        }

        {this.state.selectedVideo &&
          <VideoPlayer
            selectedVideo={this.state.selectedVideo}
            handleSelectVideo={this.handleSelectVideo}
            selectedVideoComments={this.state.selectedVideoComments}
            selectedVideoRelatedVideos={this.state.selectedVideoRelatedVideos}
          />
        }

      </div>
    )
  }
}

export default App;
