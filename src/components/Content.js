import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="mainContent">
        <div className="theText">
          <img src={require('../Assets/hackcwru title.svg')} />
          <h3>Case Western Reserve University</h3>
          <h4>February 15-17th 2019</h4>
          <a target="_blank" href="https://dashboard.hackry.io/register?hackathonId=987tC2O5oK" className="Button lhd">
            <button style={{ backgroundColor: '#73C8FA' }}>
              <p className="buttonTextLHD"> Register </p>
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Content;
