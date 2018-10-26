import React, { Component } from 'react';
import PassForm from './components/PassForm';

export default class Security extends Component {
  static displayName = 'Security';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="security-page">
        <PassForm />
      </div>
    );
  }
}
