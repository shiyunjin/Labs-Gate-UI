import React, { Component } from 'react';
import { Input, Table, Pagination, Button } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';
import ListDialog from './components/ListDialog';
import AddDialog from './components/AddDialog';
import axios from "axios";

export default class TableFilter extends Component {
  static displayName = 'TableFilter';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      devSource: [],
    };
  };

  componentDidMount() {
    axios
      .get('/api/v1/device')
      .then((response) => {
        this.setState({
          devSource: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onChange = (value) => {
    console.log({ value });
  };

  deleteOn = (render) => {
    const data = this.state.devSource;

    axios
      .post("/api/v1/device/del", {
        id: render.id,
      })
      .then((response) => {
        this.setState({
          devSource: data.filter(i => i.code !== render.code),
        });
      });
  };

  getFormValues = (dataIndex, values) => {
    const { devSource } = this.state;
    axios
      .post('/api/v1/device/edit', {
        id: values.id,
        name: values.name,
        code: values.code,
        ip: values.ip,
        username: values.username,
        password: values.password,
        super: values.super,
      })
      .then((response) => {
        values.password = '';
        values.super = '';
        devSource[dataIndex] = values;
        this.setState({
          devSource,
        });
      });
  };

  editOn = (dataIndex, vlan, invalid) => {
    const { devSource } = this.state;
    axios
      .post('/api/v1/device/interface', {
        id: devSource[dataIndex].id,
        vlan: vlan,
        invalid: invalid,
      })
      .then((response) => {
        devSource[dataIndex]['vlan'] = vlan;
        devSource[dataIndex]['invalid'] = invalid;
        this.setState({
          devSource,
        });
      });
  };

  addAction = (values) => {
    axios
      .post("/api/v1/device/add", {
        name: values.name,
        code: values.code,
      })
      .then((response) => {
        this.setState({
          devSource: [
            ...this.state.devSource,
            {
              ...response.data.data,
            },
          ],
        });
      });
  };

  renderOper = (value, index, render) => {
    return (
      <div>
        <ListDialog
          index={index}
          devSource={render}
          editOn={this.editOn}
        />
        <span style={styles.separator} />
        <EditDialog
          index={index}
          record={render}
          getFormValues={this.getFormValues}
        />
        <span style={styles.separator} />
        <DeleteBalloon
          handleRemove={() => this.deleteOn(render)}
        />
      </div>
    );
  };

  render() {
    const { devSource } = this.state;

    return (
      <IceContainer title="网络设备">
        <div style={styles.container}>
          <Table dataSource={devSource} hasBorder={false}>
            <Table.Column title="代码" dataIndex="code" width={100} />
            <Table.Column title="名称" dataIndex="name" width={100} />
            <Table.Column title="IP" dataIndex="ip" width={150} />
            <Table.Column title="操作" cell={this.renderOper} width={200} />
          </Table>
        </div>
        <AddDialog
          addAction={this.addAction}
        />
      </IceContainer>
    );
  }
}

const styles = {
  container: {
    margin: '10px 0',
  },
  tableHead: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  label: {
    marginRight: '10px',
  },
  link: {
    margin: '0 5px',
    color: 'rgba(49, 128, 253, 0.65)',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  separator: {
    margin: '0 8px',
    display: 'inline-block',
    height: '12px',
    width: '1px',
    verticalAlign: 'middle',
    background: '#e8e8e8',
  },
  pagination: {
    marginTop: '20px',
    textAlign: 'right',
  },
};
