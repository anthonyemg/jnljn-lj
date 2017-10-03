import React from 'react';

class LandingVideoList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='landingVideoList'>
        <span>
          {this.props.title}
        </span>
        <div className='landingVideoList-container'>
          {this.props.videos.map((video, idx) => (
            <div className='landingVideoList-video' key={idx}>
              <img src={video.snippet.thumbnails.default.url} />
              <span>{video.snippet.title}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default LandingVideoList;
