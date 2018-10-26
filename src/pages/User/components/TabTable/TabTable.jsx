import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Tab, Feedback } from '@icedesign/base';
import axios from 'axios';
import CustomTable from './components/CustomTable';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';

const TabPane = Tab.TabPane;

const tabs = [
  { tab: '全部', key: 'all' },
  { tab: '用户', key: 'user' },
  { tab: '管理员', key: 'admin' },
];

export default class TabTable extends Component {
  static displayName = 'TabTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      dataSource: {},
      tabKey: 'all',
    };
    this.columns = [
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '权限',
        dataIndex: 'auth',
        key: 'auth',
      },
      {
        title: '创建时间',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '操作',
        key: 'action',
        render: (value, index, record) => {
          return (
            <span>
              <EditDialog
                index={index}
                record={record}
                getFormValues={this.getFormValues}
              />
              <DeleteBalloon
                handleRemove={() => this.handleRemove(value, index, record)}
              />
            </span>
          );
        },
      },
    ];
  }

  componentDidMount() {
    axios
      .get('/api/v1/user/list')
      .then((response) => {
        this.setState({
          dataSource: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getFormValues = (dataIndex, values) => {
    const { dataSource, tabKey } = this.state;
    dataSource[tabKey][dataIndex] = values;
    axios
      .post('/api/v1/user/edit', {
        id:     values.id,
        name:   values.name,
        auth:   values.auth,
      })
      .then((response) => {
        this.setState({
          dataSource,
        });
      });
  };

  handleRemove = (value, index, values) => {
    const { dataSource, tabKey } = this.state;
    axios
      .post('/api/v1/user/del', {
        id: values.id,
      })
      .then((response) => {
        if (response.data.status === 200) {
          dataSource[tabKey].splice(index, 1);
          this.setState({
            dataSource,
          });
        } else {
          Feedback.toast.error('无权限删除本用户');
        }
      });
  };

  handleTabChange = (key) => {
    this.setState({
      tabKey: key,
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div className="tab-table">
        <IceContainer>
          <Tab onChange={this.handleTabChange}>
            {tabs.map((item) => {
              return (
                <TabPane tab={item.tab} key={item.key}>
                  <CustomTable
                    dataSource={dataSource[this.state.tabKey]}
                    columns={this.columns}
                    hasBorder={false}
                  />
                </TabPane>
              );
            })}
          </Tab>
        </IceContainer>
      </div>
    );
  }
}
