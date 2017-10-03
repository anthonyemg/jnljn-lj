import React from 'react';

class VideoGrid extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='VideoGrid'>
        {
          this.props.videos ?
            this.props.videos.map((video, idx) =>  (
              <div key={idx}>
                <img src={video.snippet.thumbnails.high.url} />
                <span>{video.snippet.channelTitle}</span>
              </div>
            ))
            :
            <span>search for videos!</span>
        }
      </div>
    )
  }

}

export default VideoGrid;
