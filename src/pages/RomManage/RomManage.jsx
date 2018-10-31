import React, { Component } from 'react';
import UserTable from './components/UserTable';

export default class RomManage extends Component {
  static displayName = 'RomManage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="rom-manage-page">
        <UserTable />
      </div>
    );
  }
}
