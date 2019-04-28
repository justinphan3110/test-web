import React, { Component } from 'react';
import cutie from '../Assets/new_assets/section_1/beachy_boi_v4.svg';

class Logo extends Component {
  render() {
    return (
      <div className="myLogo">
        <div className="imageLogo">
          <img src={cutie} />
        </div>
      </div>
    );
  }
}

export default Logo;
