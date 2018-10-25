import React, { Component } from 'react';
import BasicTab from './components/BasicTab';
import ServiceCard from './components/ServiceCard';

export default class RomControl extends Component {
  static displayName = 'RomControl';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="rom-page">
        <BasicTab />
        <ServiceCard />
      </div>
    );
  }
}
