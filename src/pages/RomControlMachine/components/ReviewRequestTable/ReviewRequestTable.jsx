import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Button } from '@icedesign/base';
import axios from 'axios';

const mockDataSource = [
  {
    invite: {
      name: '李经理',
      avatar: require('./images/TB1j159r21TBuNjy0FjXXajyXXa-499-498.png_80x80.jpg'),
    },
    email: 'hi@example.com',
    sent: {
      name: '王总',
      avatar: require('./images/TB1Daimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg'),
    },
    date: '2018年3月12日',
    status: '已发送',
  },
  {
    invite: {
      name: '王经理',
      avatar: require('./images/TB1j159r21TBuNjy0FjXXajyXXa-499-498.png_80x80.jpg'),
    },
    email: 'hi@example.com',
    sent: {
      name: '张总',
      avatar: require('./images/TB1FGimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg'),
    },
    date: '2018年3月11日',
    status: '等待接受',
  },
  {
    invite: {
      name: '张经理',
      avatar: require('./images/TB1AdOerVOWBuNjy0FiXXXFxVXa-499-498.png_80x80.jpg'),
    },
    email: 'hi@example.com',
    sent: {
      name: '于总',
      avatar: require('./images/TB1Daimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg'),
    },
    date: '2018年3月10日',
    status: '已完成',
  },
  {
    invite: {
      name: '于经理',
      avatar: require('./images/TB1Daimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg'),
    },
    email: 'hi@example.com',
    sent: {
      name: '马总',
      avatar: require('./images/TB1AdOerVOWBuNjy0FiXXXFxVXa-499-498.png_80x80.jpg'),
    },
    date: '2018年3月9日',
    status: '已发送',
  },
  {
    invite: {
      name: '马经理',
      avatar: require('./images/TB1FGimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg'),
    },
    email: 'hi@example.com',
    sent: {
      name: '刘总',
      avatar: require('./images/TB1FWimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg'),
    },
    date: '2018年3月8日',
    status: '已发送',
  },
  {
    invite: {
      name: '刘经理',
      avatar: require('./images/TB1Daimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg'),
    },
    email: 'hi@example.com',
    sent: {
      name: '陈总',
      avatar: require('./images/TB1FGimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg'),
    },
    date: '2018年3月6日',
    status: '已发送',
  },
  {
    invite: {
      name: '陈经理',
      avatar: require('./images/TB1FWimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg'),
    },
    email: 'hi@example.com',
    sent: {
      name: '许总',
      avatar: require('./images/TB1AdOerVOWBuNjy0FiXXXFxVXa-499-498.png_80x80.jpg'),
    },
    date: '2018年3月3日',
    status: '已完成',
  },
];

const statusColors = {
  PROCESS: '#fdcb6e',
  CLOSE: '#ff7675',
  OPEN: '#2ecc71',
};

export default class ReviewRequestTable extends Component {
  static displayName = 'ReviewRequestTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      loading: false,
    };
  };
  
  componentDidMount() {
    const { code } = this.props;
    axios
      .get('/api/v1/rom/' + code + '/machine')
      .then((response) => {
        this.setState({
          dataSource: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderSentInfo = (value, index, record) => {
    return (
      <div style={styles.sentInfo}>
        <Button
          type="primary"

          loading={this.state.loading}
          onClick={this.enterLoading.bind(this)}
        >开启网络</Button>
      </div>
    );
  };

  enterLoading() {
    this.setState({ loading: true });
  };

  renderStatus = (value) => {
    return <span style={{ color: statusColors[value] }}>{value}</span>;
  };

  render() {
    const { dataSource } = this.state;
    console.info(dataSource);
    
    return (
      <IceContainer title="当前教室：教六603">
        <Table dataSource={dataSource} hasBorder={false}>
          <Table.Column title="IP 地址" dataIndex="ip" />
          <Table.Column title="MAC地址" dataIndex="mac" />
          <Table.Column title="备注" dataIndex="des" />
          <Table.Column
            title="状态"
            dataIndex="status"
            cell={this.renderStatus}
          />
          <Table.Column title="操作" cell={this.renderSentInfo} />
        </Table>
      </IceContainer>
    );
  }
}

const styles = {
  inviteInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  sentInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarWrapper: {
    marginRight: 10,
  },
  avatar: {
    borderRadius: '40px',
    display: 'block',
  },
};
