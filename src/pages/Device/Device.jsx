import React, { Component } from 'react';
import Track from './components/Track';

export default class Device extends Component {
  static displayName = 'Device';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="device-page">
        <Track />
      </div>
    );
  }
}
