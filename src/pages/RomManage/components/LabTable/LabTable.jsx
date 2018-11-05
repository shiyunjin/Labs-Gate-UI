import React, { Component } from 'react';
import CustomTable from './CustomTable';

export default class LabTable extends Component {
  static displayName = 'LabTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <CustomTable />
      </div>
    );
  }
}
