import React, { Component } from 'react';
import TabTable from './components/TabTable';

export default class User extends Component {
  static displayName = 'User';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="user-page">
        <TabTable />
      </div>
    );
  }
}
