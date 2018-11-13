/* eslint-disable react/no-unused-state, no-plusplus */
import React, { Component } from 'react';
import { Table, Switch, Icon, Button, Grid, Pagination } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import AddDialog from './components/AddDialog';
import ListDialog from './components/ListDialog';
import AddFloorDialog from './components/AddFloorDialog';
import DeleteBalloon from './components/DeleteBalloon';
import EditDialog from './components/EditDialog';
import AdminDialog from './components/AdminDialog';
import axios from 'axios';

const { Row, Col } = Grid;

export default class CustomTable extends Component {
  static displayName = 'CustomTable';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      formValue: {},
      current: 1,
      labSource: [],
      floorSource: {},
    };
  };

  componentDidMount() {
    axios
      .get('/api/v1/floor')
      .then((response) => {
        this.setState({
          floorSource: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get('/api/v1/lab')
      .then((response) => {
        this.setState({
          labSource: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  formChange = (value) => {
    console.log('changed value', value);
    this.setState({
      formValue: value,
    });
  };

  handlePaginationChange = (current) => {
    this.setState({
      current,
    });
  };

  deleteOn = (render) => {
    const data = this.state.labSource;

    axios
      .post("/api/v1/lab/del", {
        floor: render.floor,
        code: render.code,
      })
      .then((response) => {
        this.setState({
          labSource: data.filter(i => i.code !== render.code),
        });
      });
  };

  renderOper = (value, index, render) => {
    return (
      <div style={styles.oper}>
        <EditDialog
          index={index}
          record={render}
          getFormValues={this.getFormValues}
          floorSource={this.state.floorSource}
        />
        <AdminDialog
          index={index}
          record={render}
          getFormValues={this.getFormValues}
          editOn={this.editOn}
        />
        <DeleteBalloon
          handleRemove={() => this.deleteOn(render)}
        />
      </div>
    );
  };

  getFormValues = (dataIndex, values) => {
    const { labSource } = this.state;
    labSource[dataIndex] = values;
    axios
      .post('/api/v1/lab/edit', {
        floor: values.floor,
        name: values.name,
        code: values.code,
        vlan: values.vlan,
        device: values.device,
      })
      .then((response) => {
        this.setState({
          labSource,
        });
      });
  };

  addFloorAction = (value, id) => {
    this.setState({
      floorSource: {
        ...this.state.floorSource,
        [id]: value.name,
      },
    });
  };

  floorRender = (value, index, render) => {
    const { floorSource } = this.state;

    return <span>{floorSource[value]}</span>;
  };

  setFloorAction = (floorSource) => {
    this.setState({
      floorSource: floorSource,
    });
  };

  addLabAction = (values) => {
    axios
      .post("/api/v1/lab/add", {
        floor: values.floor,
        name: values.name,
        code: values.code,
        vlan: values.vlan,
        device: values.device,
      })
      .then((response) => {
        this.setState({
          labSource: [
            ...this.state.labSource,
            {
              ...response.data.data,
            },
          ],
        });
      });
  };

  editOn = (dataIndex, admin) => {
    const { labSource } = this.state;
    axios
      .post('/api/v1/lab/admin', {
        floor: labSource[dataIndex].floor,
        code: labSource[dataIndex].code,
        admin: admin,
      })
      .then((response) => {
        labSource[dataIndex]['admin'] = admin;
        this.setState({
          labSource,
        });
      });
  };

  renderAdmin = (value, index, render) => {
    const adminNum = value.length;
    if(adminNum > 3) {
      return "当前有"+adminNum+"位管理员";
    } else {
        return value.join(" , ");
    }
    return ;
  };

  render() {
    return (
      <IceContainer title="实验室管理">
        <Row wrap style={styles.headRow}>
          <Col l="12">
            <AddDialog
              floorSource={this.state.floorSource}
              addLabAction={this.addLabAction}
            />
          </Col>
          <Col l="12" style={styles.center}>
            <AddFloorDialog
              addFloorAction={this.addFloorAction}
            />
            <ListDialog
              floorSource={this.state.floorSource}
              setFloorAction={this.state.setFloorAction}
            />
          </Col>
        </Row>
        <Table
          dataSource={this.state.labSource}
        >
          <Table.Column title="楼层" dataIndex="floor" width={100} cell={this.floorRender} />
          <Table.Column title="名称" dataIndex="name" width={150} />
          <Table.Column title="代码" dataIndex="code" width={100} />
          <Table.Column title="设备" dataIndex="device" width={100} />
          <Table.Column title="机器数" dataIndex="machine" width={100} />
          <Table.Column title="管理员" dataIndex="admin" width={150} cell={this.renderAdmin} />
          <Table.Column title="操作" width={150} cell={this.renderOper} />
        </Table>
      </IceContainer>
    );
  }
}

const styles = {
  headRow: {
    marginBottom: '10px',
  },
  icon: {
    color: '#2c72ee',
    cursor: 'pointer',
  },
  deleteIcon: {
    marginLeft: '20px',
  },
  center: {
    textAlign: 'right',
  },
  button: {
    borderRadius: '4px',
  },
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
};
