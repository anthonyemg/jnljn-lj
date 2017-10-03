import React from 'react';

class TopMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      searchQuery: '240sx',
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
      console.log(data)
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
      <div className='TopMenu'>

        <div className='topMenu-title'>
          <div className='topMenu-titleBurger'>
            <i className='fa fa-bars fa-lg' />
          </div>
          <i className='fa fa-youtube-play fa-med topMenu-youtubeLogo' />
          <span>YuoTube</span>
        </div>

        <div className='topMenu-searchBar'>
          <input
            placeholder='Search'
            value={this.state.searchQuery}
            onChange={this.handleSearchChange}
            onKeyPress={this.handleSearchEnterKeyPress}
          />
          <div className='topMenu-searchBarSearchButton' onClick={this.searchYouTube}>
            <i className='fa fa-search fa-1x' />
          </div>
        </div>

        <div className='topMenu-navigationButton'>
          <i className='fa fa-upload fa-lg' />
          <i className='fa fa-th fa-lg' />
          <i className='fa fa-ellipsis-v fa-lg' />
          <span>SIGN IN</span>
        </div>

      </div>
    )
  }

}

export default TopMenu;
