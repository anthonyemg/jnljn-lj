import React from 'react';

class UpNextList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className={`video-playerUpNext ${this.props.type}`}>
        <span>Up next</span>
        <div className='video-playerUpNextList'>
          {this.props.selectedVideoRelatedVideos.map((video, idx) => (
            <div className='video-playerUpNextVideoContainer' key={idx} onClick={() => this.props.handleSelectVideo(video)}>
              <img src={video.snippet.thumbnails.medium.url} />
              <div className='video-playerUpNextVideoWrapper'>
                <span className='video-playerUpNextVideoTitle'>{video.snippet.title}</span>
                <span className='video-playerUpNextVideoText'>{video.snippet.channelTitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default UpNextList;
