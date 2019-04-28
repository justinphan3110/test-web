import React, { Component } from 'react';
import '../Assets/css/schedule.css';


class Schedule_Item extends Component {
  render() {
    return (
      <div className="sItem">
        <h5 className="timeText">{this.props.time}</h5>
        <h5 className="dayText">{this.props.text}</h5>
      </div>
    );
  }
}

export default Schedule_Item;
