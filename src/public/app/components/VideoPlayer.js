import React from 'react';

class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='video-player'>
        <div className='video-playerVideo'>
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`}
            allowFullScreen>
          </iframe>
        </div>
        <div className="video-playerDetails">
          <h3>{this.props.selectedVideo.snippet.title}</h3>
        </div>
      </div>
    )
  }
}

export default VideoPlayer;
