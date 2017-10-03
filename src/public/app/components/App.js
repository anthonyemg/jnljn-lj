import React from 'react';

import TopMenu from './TopMenu';
import TopMenuMobile from './TopMenuMobile';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import LandingVideoList from './LandingVideoList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: null,
      resultsNumber: 0,
      selectedVideo: null,
      selectedVideoComments: null,
      selectedVideoRelatedVideos: null,
      trendingVideos: null,
      popularMusicVideos: null,
      movieTrailers: null,
      lateNight: null,
    }
    this.handleVideoListUpdate = this.handleVideoListUpdate.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
    this.handleFetchComments = this.handleFetchComments.bind(this);
    this.fetchRelatedVideos = this.fetchRelatedVideos.bind(this);
    this.fetchTrending = this.fetchTrending.bind(this);
    this.fetchPopularMusicVideos = this.fetchPopularMusicVideos.bind(this);
    this.fetchMovieTrailers = this.fetchMovieTrailers.bind(this);
    this.fetchLateNight = this.fetchLateNight.bind(this);
  }

  componentWillMount() {
    this.fetchTrending();
    this.fetchPopularMusicVideos();
    this.fetchMovieTrailers();
    this.fetchLateNight();
  }

  componentDidMount() {
    this.setState({
      landingVideoList: true,
    })
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
    this.fetchRelatedVideos(video.id.videoId);
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

  fetchRelatedVideos(videoId) {
    fetch('/related/videos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({data: videoId}),
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        selectedVideoRelatedVideos: data.items,
      })
    })
    .catch(err => console.log(err));
  }

  fetchTrending() {
    fetch('/trending', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        trendingVideos: data.items,
      })
    })
    .catch(err => console.log(err));
  }

  fetchPopularMusicVideos() {
    fetch('/popular/musicvideos', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        this.setState({
          popularMusicVideos: data.items
        })
      })
      .catch(err => console.log(err));
  }

  fetchMovieTrailers() {
    fetch('/movie/trailers', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        this.setState({
          movieTrailers: data.items
        })
      })
      .catch(err => console.log(err));
  }

  fetchLateNight() {
    fetch('/latenight', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        this.setState({
          lateNight: data.items
        })
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className='App'>

        <TopMenu
          handleVideoListUpdate={this.handleVideoListUpdate}
        />

        <TopMenuMobile />

        {this.state.trendingVideos && this.state.popularMusicVideos && this.state.movieTrailers && this.state.lateNight && !this.state.videos &&
          <div>
            <LandingVideoList
              videos={this.state.trendingVideos}
              title='Trending'
            />
            <LandingVideoList
              videos={this.state.popularMusicVideos}
              title='Popular Music Videos by Music'
            />
            <LandingVideoList
              videos={this.state.movieTrailers}
              title='Trailers by Movies - Topic'
            />
            <LandingVideoList
              videos={this.state.lateNight}
              title='Catch Up on Late Night by Popular on YouTube'
            />
          </div>
        }

        {this.state.videos && !this.state.selectedVideo &&
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
