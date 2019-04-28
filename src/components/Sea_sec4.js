import React, { Component } from 'react';
import top_sea from '../Assets/new_assets/section_4/top_sea.svg';
import middle_sea from '../Assets/new_assets/section_4/mid_sea.svg';
import bottom_sea from '../Assets/new_assets/section_4/bot_sea.svg';


class Sea_sec4 extends Component {
  render() {
    return (
      <div className="sea">
        <img className="sea_sec_4 top_sea_sec_4" src={top_sea} />
        <img className="sea_sec_4 mid_sea_sec_4" src={middle_sea} />
        <img className="sea_sec_4 bot_sea_sec_4" src={bottom_sea} />
      </div>
    );
  }
}

export default Sea_sec4;
