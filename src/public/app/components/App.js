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
    }
    this.handleVideoListUpdate = this.handleVideoListUpdate.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
  }

  handleVideoListUpdate(data) {
    console.log('state', data)
    this.setState({
      videos: data.items,
      resultsNumber: this.numberWithCommas(data.pageInfo.totalResults),
      selectedVideo: null,
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
  }

  render() {
    return (
      <div className='App'>

        <TopMenu
          handleVideoListUpdate={this.handleVideoListUpdate} />

        <TopMenuMobile />

        {this.state.selectedVideo ?
          <div></div>
          :
          <VideoList
            videos={this.state.videos}
            resultsNumber={this.state.resultsNumber}
            handleSelectVideo={this.handleSelectVideo}
          />
        }

        {this.state.selectedVideo ?
          <VideoPlayer
            selectedVideo={this.state.selectedVideo}
            handleSelectVideo={this.handleSelectVideo}
          />
          :
          <div></div>
        }

      </div>
    )
  }
}

export default App;
