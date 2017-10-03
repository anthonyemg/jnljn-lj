import React from 'react';

class VideoList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='VideoList'>
        <div className='VideoList-top'>
          <span>About {this.props.resultsNumber} results</span>
        </div>
        {
          this.props.videos ?
            this.props.videos.map((video, idx) =>  (

              <div className='VideoList-video' key={idx}>
                <div>
                  <div
                    className='VideoList-videoImage'
                    style={{background: `url(${video.snippet.thumbnails.high.url})`}}>
                  </div>
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

            ))
            :
            <span>search for videos!</span>


        }
      </div>
    )
  }

}

export default VideoList;
