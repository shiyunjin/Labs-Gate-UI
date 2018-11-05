import React, { Component } from 'react';
import LabTable from './components/LabTable';

export default class RomManage extends Component {
  static displayName = 'RomManage';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="rom-manage-page">
        <LabTable />
      </div>
    );
  }
}
