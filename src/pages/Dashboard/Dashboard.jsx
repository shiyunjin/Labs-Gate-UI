

import React, { Component } from 'react';

import DisplayCard from './components/DisplayCard';
import LatestNews from './components/LatestNews';
import QuickNavigation from './components/QuickNavigation';

import './Dashboard.scss';

export default class Dashboard extends Component {
  static displayName = 'Dashboard';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard-page">
        <DisplayCard />
        <QuickNavigation/>
        <LatestNews/>

      </div>
    );
  }
}
