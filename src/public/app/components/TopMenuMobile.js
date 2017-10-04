import React from 'react';

class TopMenuMobile extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      searchQuery: '',
    }
    this.searchYouTube = this.searchYouTube.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchEnterKeyPress = this.handleSearchEnterKeyPress.bind(this);
  }

  searchYouTube() {
    fetch('/videos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({data: this.state.searchQuery}),
    })
    .then(res => res.json())
    .then(data => {
      this.props.handleVideoListUpdate(data);
    })
    .catch(err => console.log(err));
  }

  handleSearchChange(e) {
    this.setState({
      searchQuery: e.target.value
    })
  }

  handleSearchEnterKeyPress(e) {
    if (e.charCode == 13) {
      this.searchYouTube();
    }
  }

  render() {
    return (
      <div className='TopMenuMobile'>
        <div className='TopMenuMobile-top' style={{backgroundColor: this.props.selectedVideo ? 'rgb(51,51,51)' : 'rgb(253,0,0)'}}>
          <div>
            <i className='fa fa-youtube-play fa-2x' onClick={() => this.props.handleYuoTubePress()} style={{marginLeft:12, marginRight:12}} />
            {/* <span>Home</span> */}
          </div>
          <input
            className='topMenuMobile-input'
            placeholder='Search YouTube'
            value={this.state.searchQuery}
            onChange={this.handleSearchChange}
            onKeyPress={this.handleSearchEnterKeyPress}
          />
          <div>
            <i className='fa fa-search fa-lg' style={{marginLeft:12, marginRight:12}} onClick={this.searchYouTube} />
            {/* <i className='fa fa-ellipsis-v fa-lg' style={{marginLeft:12, marginRight:12}} /> */}
          </div>
        </div>
        <div className='TopMenuMobile-bottom'>
          <i className='fa fa-home fa-2x' />
          <i className='fa fa-fire fa-2x' />
          <i className='fa fa-user fa-2x' />
        </div>
      </div>

    )
  }

}

export default TopMenuMobile;
