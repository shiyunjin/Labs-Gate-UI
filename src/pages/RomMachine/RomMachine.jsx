import React, { Component } from 'react';
import UserTable from './components/UserTable';

export default class RomMachine extends Component {
  static displayName = 'RomMachine';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="rom-machine-page">
        <UserTable />
      </div>
    );
  }
}
