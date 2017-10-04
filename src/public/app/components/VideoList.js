import React from 'react';

class VideoList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.videos) {
      return (
        <div className='VideoList'>
          <div className='VideoList-top'>
            <span>About {this.props.resultsNumber} results</span>
          </div>
          {this.props.videos.map((video, idx) =>  (
            <div className='VideoList-video' key={idx} onClick={() => this.props.handleSelectVideo(video)}>
              <div>
                {/* <div
                  className='VideoList-videoImage'
                  style={{background: `url(${video.snippet.thumbnails.default.url})`}}>
                </div> */}
                <img src={video.snippet.thumbnails.medium.url} />
              </div>
              <div className='VideoList-videoDescription'>

                <div className='VideoList-videoDescriptionTitle'>
                  <span>{video.snippet.title}</span>
                </div>

                <div className='VideoList-videoDescriptionChannelTitle'>
                  <span>{video.snippet.channelTitle}</span>
                  <span>•</span>
                  <span>{video.snippet.publishedAt}</span>
                </div>

                <span className='VideoList-videoDescriptionDescription'>
                  {video.snippet.description}
                </span>

              </div>
            </div>
          ))}
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

}

export default VideoList;
