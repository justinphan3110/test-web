import React, { Component } from 'react';
import top_sea from '../Assets/new_assets/section_3/top_sea.svg';
import bottom_sea from '../Assets/new_assets/section_3/bot_sea.svg';


class Sea_sec3 extends Component {
  render() {
    return (
      <div className="sea">
        <img className="sea_sec_3 top_sea_sec_3" src={top_sea} />
        <img className="sea_sec_3 bot_sea_sec_3" src={bottom_sea} />
      </div>
    );
  }
}

export default Sea_sec3;
