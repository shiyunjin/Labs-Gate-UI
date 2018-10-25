import React, { Component } from 'react';
import SettingsForm from './components/SettingsForm';

export default class Security extends Component {
  static displayName = 'Security';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="security-page">
        <SettingsForm />
      </div>
    );
  }
}
