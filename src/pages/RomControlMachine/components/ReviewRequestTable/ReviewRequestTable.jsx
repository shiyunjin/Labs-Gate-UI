import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Table, Button, Feedback } from '@icedesign/base';
import DeleteBalloon from './components/DeleteBalloon';
import Authorized from './../../../../utils/Authorized';
import axios from 'axios';

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
      loading: {},
      newStatus: {},
      romName: "",
    };
  };
  
  componentDidMount() {
    const { code } = this.props;
    axios
      .get('/api/v1/rom/' + code + '/machine')
      .then((response) => {
        this.setState({
          dataSource: response.data.data,
          romName: response.data.name,
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
          type={this.state.loading[record.ip] ? "secondary" : "primary"}
          loading={this.state.loading[record.ip]}
          onClick={(this.state.newStatus[record.ip] ? this.state.newStatus[record.ip] : record.status) == 'CLOSE' ? this.openNet.bind(this, record) : this.closeNet.bind(this, record)}
        >{this.state.loading[record.ip] ? '执行中' : (record.status == 'CLOSE' ? '开启网络' : '关闭网络')}</Button>
        <Authorized authority="admin">
          <span style={styles.separator} />
          <DeleteBalloon handleRemove={this.delMachine.bind(this, value, index, record)} />
        </Authorized>
      </div>
    );
  };

  openNet(record) {
    const { code } = this.props;
    this.setState({
      loading:{
        ...this.state.loading,
        [record.ip]: true,
      },
      newStatus:{
        ...this.state.newStatus,
        [record.ip]: 'PROCESS',
      }
    });
    axios
      .post('/api/v1/rom/' + code + '/machine/' + record.ip + '/open')
      .then((response) => {
        if (response.data.status === 200) {
          this.setState({
            loading:{
              ...this.state.loading,
              [record.ip]: false,
            },
            newStatus:{
              ...this.state.newStatus,
              [record.ip]: 'OPEN',
            }
          });
          Feedback.toast.success('切换网络状态成功');
        } else {
          this.setState({
            loading:{
              ...this.state.loading,
              [record.ip]: false,
            },
            newStatus:{
              ...this.state.newStatus,
              [record.ip]: 'CLOSE',
            }
          });
          Feedback.toast.prompt('切换网络状态失败');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  closeNet(record) {
    const { code } = this.props;
    this.setState({
      loading:{
        ...this.state.loading,
        [record.ip]: true,
      },
      newStatus:{
        ...this.state.newStatus,
        [record.ip]: 'PROCESS',
      }
    });
    axios
      .post('/api/v1/rom/' + code + '/machine/' + record.ip + '/close')
      .then((response) => {
        if (response.data.status === 200) {
          this.setState({
            loading:{
              ...this.state.loading,
              [record.ip]: false,
            },
            newStatus:{
              ...this.state.newStatus,
              [record.ip]: 'CLOSE',
            }
          });
          Feedback.toast.success('切换网络状态成功');
        } else {
          this.setState({
            loading:{
              ...this.state.loading,
              [record.ip]: false,
            },
            newStatus:{
              ...this.state.newStatus,
              [record.ip]: 'OPEN',
            }
          });
          Feedback.toast.prompt('切换网络状态失败');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  delMachine(value, id, record) {
    const { code } = this.props;
    axios
      .post('/api/v1/rom/' + code + '/machine/' + record.ip + '/del')
      .then((response) => {
        if (response.data.status === 200) {
          const { dataSource } = this.state;
          let index = -1;
          dataSource.forEach((item, i) => {
            if (item.ip === record.ip) {
              index = i;
            }
          });
          if (index !== -1) {
            dataSource.splice(index, 1);
            this.setState({
              dataSource
            });
          }
          Feedback.toast.success('删除机器成功');
        } else {
          Feedback.toast.prompt('删除机器失败');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  renderStatus = (value, index, record) => {
    return <span style={{ color: statusColors[this.state.newStatus[record.ip] ? this.state.newStatus[record.ip] : value] }}>{this.state.newStatus[record.ip] ? this.state.newStatus[record.ip] : value}</span>;
  };

  render() {
    const { dataSource, romName } = this.state;
    
    return (
      <IceContainer title={"当前教室：" + romName}>
        <Table dataSource={dataSource} hasBorder={false}>
          <Table.Column title="IP 地址" dataIndex="ip" />
          <Table.Column title="MAC地址" dataIndex="mac" />
          <Table.Column title="备注" dataIndex="des" />
          <Table.Column
            title="状态"
            dataIndex="status"
            cell={this.renderStatus}
          />
          <Table.Column title="操作" cell={this.renderSentInfo} width={200} />
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
  separator: {
    margin: '0 8px',
    display: 'inline-block',
    height: '12px',
    width: '1px',
    verticalAlign: 'middle',
    background: '#e8e8e8',
  },
  avatar: {
    borderRadius: '40px',
    display: 'block',
  },
};
