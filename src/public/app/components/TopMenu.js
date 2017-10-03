import React from 'react';

class TopMenu extends React.Component {

  constructor(props) {
    super(props);
    this.searchYouTube = this.searchYouTube.bind(this);
  }

  searchYouTube () {

    fetch('https://www.googleapis.com/youtube/v3/search?key=' + '' + '&part=snippet,id&order=date&maxResults=20')
       .then(resp => resp.json())
       .then((resp) => {
         console.log('wooo', resp.items);
         //this.setState({video: resp.results});
        //  this.setState({video: resp.items});xx
        //  console.log(this.state.video);
         this.props.handVideoListUpdate(resp.items);
       })

        // .then(res => res.json())
        // .then(function(data) {
        //   console.log('woo',data)
        // })
        .catch(err => console.log('errrorr',err));
  };

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
          <input placeholder='Search'></input>
          {/* <button>Mag</button> */}
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
