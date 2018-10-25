import React, { Component } from 'react';
import TabChart from './components/TabChart';

export default class Status extends Component {
  static displayName = 'Status';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="status-page">
        <TabChart />
      </div>
    );
  }
}
