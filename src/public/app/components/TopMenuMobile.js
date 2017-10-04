import React from 'react';

class TopMenuMobile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className='TopMenuMobile'>
        <div className='TopMenuMobile-top' style={{backgroundColor: this.props.selectedVideo ? 'rgb(51,51,51)' : 'rgb(253,0,0)'}}>
          <div>
            <i className='fa fa-youtube-play fa-2x' style={{marginLeft:12}} />
            <span style={{marginLeft:12}}>Home</span>
          </div>
          <div>
            <i className='fa fa-search fa-lg' />
            <i className='fa fa-ellipsis-v fa-lg' style={{marginLeft:24, marginRight:12}} />
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
