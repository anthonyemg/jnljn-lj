import React from 'react';
import YouTube from 'react-youtube';
import Comments from './Comments';
import UpNextList from './UpNextList';

class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.convertToDate = this.convertToDate.bind(this);
    this.handleEndedVideo = this.handleEndedVideo.bind(this);
  }
  componentDidMount() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  componentWillUpdate() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  convertToDate(date) {
    let d = new Date(date);
    return (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getFullYear();
  }
  handleEndedVideo() {
    this.props.handleSelectVideo(this.props.selectedVideoRelatedVideos[0])
  }
  render() {
    return (
      <div className='video-player'>
        <div className='video-playerLeftColumn'>
          <div className='video-playerVideo'>
            <YouTube
              videoId={this.props.selectedVideoId}
              onEnd={this.handleEndedVideo}
              opts={{ playerVars: { autoplay: 1 } }}
            />
          </div>
          <div className='video-playerDetails'>
            <div className='video-playerDetailsTitle'>
              <span>{this.props.selectedVideo.snippet.title}</span>
            </div>
            <div className='video-playerDetailsText'>
              <div className='video-playerDetailsWrapper'>
                <span className='video-playerChannelTitle'>{this.props.selectedVideo.snippet.channelTitle}</span>
                <span className='video-playerPublishedAt'>Published on {this.convertToDate(this.props.selectedVideo.snippet.publishedAt)}</span>
                <span className='video-playerDescription'>{this.props.selectedVideo.snippet.description}</span>
              </div>
            </div>
          </div>
          {this.props.selectedVideoRelatedVideos &&
            <UpNextList
              selectedVideoRelatedVideos = {this.props.selectedVideoRelatedVideos}
              handleSelectVideo = {this.props.handleSelectVideo}
              type = 'mobile'
            />
          }
          {this.props.selectedVideoComments &&
            <Comments
              selectedVideoComments={this.props.selectedVideoComments}
            />
          }
        </div>
        {this.props.selectedVideoRelatedVideos &&
          <UpNextList
            selectedVideoRelatedVideos = {this.props.selectedVideoRelatedVideos}
            handleSelectVideo = {this.props.handleSelectVideo}
            type = 'desktop'
          />
        }
      </div>
    )
  }
}

export default VideoPlayer;
