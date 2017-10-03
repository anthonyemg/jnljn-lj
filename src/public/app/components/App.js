import React from 'react';

import TopMenu from './TopMenu';
import TopMenuMobile from './TopMenuMobile';
import VideoList from './VideoList';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: null,
      resultsNumber: 0,
    }
    this.handVideoListUpdate = this.handVideoListUpdate.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  handVideoListUpdate(data) {
    console.log('state', data)
    this.setState({
      videos: data.items,
      resultsNumber: this.numberWithCommas(data.pageInfo.totalResults),
    })
  }

  numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
  }

  render() {
    return (
      <div className='App'>

        <TopMenu handVideoListUpdate={this.handVideoListUpdate} />

        <TopMenuMobile />

        <VideoList
          videos={this.state.videos}
          resultsNumber={this.state.resultsNumber}
        />

      </div>
    )
  }
}

export default App;
