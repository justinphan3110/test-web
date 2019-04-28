import React, { Component } from 'react';
import top_sea from '../Assets/new_assets/section_2/top_sea.svg';
import middle_sea from '../Assets/new_assets/section_2/mid_sea.svg';
import bottom_sea from '../Assets/new_assets/section_2/bot_sea.svg';


class Sea_sec2 extends Component {
  render() {
    return (
      <div className="sea">
        <img className="sea_sec_2 top_sea_sec_2" src={top_sea} />
        <img className="sea_sec_2 mid_sea_sec_2" src={middle_sea} />
        <img className="sea_sec_2 bot_sea_sec_2" src={bottom_sea} />
      </div>
    );
  }
}

export default Sea_sec2;
