import React, { Component } from 'react';
import Schedule_Item from './Schedule_Item';
import '../Assets/css/schedule.css';

class Schedule extends Component {

  constructor(props) {
    super(props);

    this.state = {
        fridayEvents: [],
        saturdayEvents: [],
        sundayEvents: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.events != this.props.events) {
      var allEvents = this.props.events;

      var fridayEvents = allEvents.filter(function (event) {
        var date = new Date(event.startDate);
        return date.getDay() == 5;
      });
      var saturdayEvents = allEvents.filter(function (event) {
        var date = new Date(event.startDate);
        return date.getDay() == 6;
      });
      var sundayEvents = allEvents.filter(function (event) {
        var date = new Date(event.startDate);
        return date.getDay() == 0;
      });

      this.setState({
        fridayEvents: fridayEvents,
        saturdayEvents: saturdayEvents,
        sundayEvents: sundayEvents
      })
    }
  }


  render() {
    return (
      <div className="container">
        <h3 className="darkTitle">Schedule</h3>
        <div className="scheduleContainer">
            <div className="dayContainer">
                <h4>Friday</h4>
                {
                  this.state.fridayEvents.map(function(item, i) {
                    var startTime = new Date(item.startDate);
                    var hour = startTime.getHours();
                    var min = startTime.getMinutes();
                    var timeString = "";
                    if(hour > 12) {
                      hour = hour - 12;
                      if(min == 0) {
                        timeString = hour.toString() + "PM ";
                      } else {
                        timeString = hour.toString() +":"+ min.toString() +"PM";
                      }
                    } else {
                      if(min == 0) {
                        timeString = hour.toString() + "AM ";
                      } else {
                        timeString = hour.toString() +":"+ min.toString() +"AM";
                      }
                    }
                    return <Schedule_Item time={timeString} text={item.name} />
                  })
                }
            </div>
            <div className="dayContainer eachDay">
                <h4>Saturday</h4>
                {
                  this.state.saturdayEvents.map(function(item, i) {
                    var startTime = new Date(item.startDate);
                    var hour = startTime.getHours();
                    var min = startTime.getMinutes();
                    var timeString = "";
                    if(hour > 12) {
                      hour = hour - 12;
                      if(min == 0) {
                        timeString = hour.toString() + "PM ";
                      } else {
                        timeString = hour.toString() + ":" + min.toString() +"PM";
                      }
                    } else {
                      if(min == 0) {
                        timeString = hour.toString() + "AM ";
                      } else {
                        timeString = hour.toString() + ":" + min.toString() +"AM";
                      }
                    }
                    return <Schedule_Item time={timeString} text={item.name} />
                  })
                }
            </div>
            <div className="dayContainer eachDay">
                <h4>Sunday</h4>
                {
                  this.state.sundayEvents.map(function(item, i) {
                    var startTime = new Date(item.startDate);
                    var hour = startTime.getHours();
                    var min = startTime.getMinutes();
                    var timeString = "";
                    if(hour > 12) {
                      hour = hour - 12;
                      if(min == 0) {
                        timeString = hour.toString() + "PM ";
                      } else {
                        timeString = hour.toString() + ":" + min.toString() +"PM";
                      }
                    } else {
                      if(min == 0) {
                        timeString = hour.toString() + "AM ";
                      } else {
                        timeString = hour.toString() + ":" + min.toString() +"AM";
                      }
                    }
                    return <Schedule_Item time={timeString} text={item.name} />
                  })
                }
            </div>
        </div>
      </div>
    );
  }
}

export default Schedule;
