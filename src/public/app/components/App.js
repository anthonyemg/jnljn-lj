import React from 'react';

import TopMenu from './TopMenu';
import TopMenuMobile from './TopMenuMobile';
import VideoGrid from './VideoGrid';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: null,
    }

    this.handVideoListUpdate = this.handVideoListUpdate.bind(this);
  }

  handVideoListUpdate(videos) {
    console.log('setting state', videos)
    this.setState({
      videos: videos,
    })
  }

  render() {
    return (
      <div className='App'>

        <TopMenu handVideoListUpdate={this.handVideoListUpdate} />

        <TopMenuMobile />

        <VideoGrid videos={this.state.videos} />

      </div>
    )
  }
}

export default App;
