import React, { Component } from 'react';
import top_sea from '../Assets/new_assets/section_1/top_front waves.svg';


class Sea_sec1 extends Component {
  render() {
    return (
      <div className="sea sea_sec_1_container">
        <img className="sea_sec_1 top_sea_sec_1" src={top_sea} />
      </div>
    );
  }
}

export default Sea_sec1;
