import React, { Component } from 'react';

class Sponsor extends Component {
  render() {
    return (
      <a
        style={{ 'max-width': `${this.props.maxWidth || 40}%` }}
        className="sponsorLogo"
        href={this.props.href}
        target="_blank"
      >
        <img style={{ width: '100%' }} src={this.props.src} />
      </a>
    );
  }
}

export default Sponsor;
