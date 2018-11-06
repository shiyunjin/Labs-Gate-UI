import React, { Component } from 'react';
import { Input, Table, Pagination } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import EditDialog from './components/EditDialog';
import DeleteBalloon from './components/DeleteBalloon';

const getData = () => {
  return Array.from({ length: 5 }).map((item, index) => {
    return {
      code: 'dx603',
      name: 'Page',
      ip: '192.168.1.1',
      id: `${index}`,
      leader: '淘小宝',
    };
  });
};

export default class TableFilter extends Component {
  static displayName = 'TableFilter';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  handlePaginationChange = (current) => {
    this.setState({
      current,
    });
  };

  onChange = (value) => {
    console.log({ value });
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
      <div>
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
    const dataSource = getData();

    return (
      <IceContainer title="网络设备">
        <div style={styles.container}>
          <Table dataSource={dataSource} hasBorder={false}>
            <Table.Column title="代码" dataIndex="code" width={100} />
            <Table.Column title="名称" dataIndex="name" width={100} />
            <Table.Column title="IP" dataIndex="ip" width={150} />
            <Table.Column title="操作" cell={this.renderOper} width={200} />
          </Table>
        </div>
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
