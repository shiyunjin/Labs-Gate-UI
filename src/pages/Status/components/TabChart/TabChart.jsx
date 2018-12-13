import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@icedesign/base';
import SeriesLine from './SeriesLine';
import BasicLine from './BasicLine';
import StackedBarChart from './components/StackedBarChart';

const TabPane = Tab.TabPane;

export default class TabChart extends Component {
  static displayName = 'TabChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (key) => {
    console.log('change', key);
  };

  render() {
    return (
      <div className="tab-chart" style={styles.container}>
        <IceContainer style={styles.card}>
          <Tab onChange={this.handleChange}>
            <TabPane key="1" tab="设备：core">
              <StackedBarChart code="core" />
            </TabPane>
            <TabPane key="2" tab="设备：test">
              <BasicLine />
            </TabPane>
          </Tab>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    marginBottom: '20px',
  },
  card: {
    padding: '0 20px',
  },
};
