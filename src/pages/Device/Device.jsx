import React, { Component } from 'react';
import DownloadCard from './components/DownloadCard';

export default class Device extends Component {
  static displayName = 'Device';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="device-page">
        <DownloadCard />
      </div>
    );
  }
}
