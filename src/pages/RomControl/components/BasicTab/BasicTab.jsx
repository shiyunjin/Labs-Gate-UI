import React, { Component } from 'react';
import { Tab } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import ServiceCard from '../ServiceCard';
import axios from 'axios';

export default class BasicTab extends Component {
  static displayName = 'BasicTab';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      tabs: [],
      dataSource: {},
      tabKey: 0,
    };
  };

  componentDidMount() {
    axios
      .get('/api/v1/rom/list')
      .then((response) => {
        this.setState({
          dataSource: response.data.data.dataSource,
          tabs: response.data.data.tabs,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleTabChange = (key) => {
    this.setState({
      tabKey: key,
    });
  };

  render() {
    const { dataSource, tabs } = this.state;

    return (
      <div className="basic-tab">
        <IceContainer style={styles.tabCardStyle}>
          <Tab contentStyle={HIDDEN} onChange={this.handleTabChange} defaultActiveKey="0" lazyLoad={false}>
            {tabs.map((item) => 
              <Tab.TabPane key={item.key} tab={item.tab} />
            )}
          </Tab>
        </IceContainer>
        {tabs.map((item) => 
          <div key={item.key} style={{display:this.state.tabKey == item.key ? '' : 'none'}}>
            <ServiceCard
              dataSource={dataSource[item.key]}
            />
          </div>
        )}
      </div>
    );
  }
}

const HIDDEN = {
  display: 'none',
};

const styles = {
  tabCardStyle: {
    padding: 0,
  },
};
