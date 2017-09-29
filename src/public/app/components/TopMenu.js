import React from 'react';

class TopMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

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
          <input placeholder='Search'></input>
          {/* <button>Mag</button> */}
          <div className='topMenu-searchBarSearchButton'>
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
