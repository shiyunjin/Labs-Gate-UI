import React, { Component } from 'react';
import ReviewRequestTable from './components/ReviewRequestTable';

export default class RomControlMachine extends Component {
  static displayName = 'RomControlMachine';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="rom-control-machine-page">
        <ReviewRequestTable
          code={this.props.match.params.code}
        />
      </div>
    );
  }
}
