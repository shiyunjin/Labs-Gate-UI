import React, { Component } from 'react';
import { Dialog, Button, Form, Table, Icon, Input } from '@icedesign/base';
import axios from 'axios';

const FormItem = Form.Item;

export default class ListDialog extends Component {
  static displayName = 'ListDialog';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      floorSource: [],
      edit: {},
      inpValu: {},
    };
  }

  onOpen = (floorSource, labSource) => {
    this.setState({
      visible: true,
      floorSource: floorSource,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  renderOper = (value, index, render) => {
    return (
      <div style={styles.oper}>
        {this.state.edit[render.id]?
          <Icon
            type="select"
            size="small"
            style={{ ...styles.icon, ...styles.editIcon }}
            onClick={this.editComplete.bind(this, render.id)}
          />
          :
          <Icon
            type="edit"
            size="small"
            style={{ ...styles.icon, ...styles.editIcon }}
            onClick={this.editOn.bind(this, render)}
          />
        }
        <Icon
          type="ashbin"
          size="small"
          style={{ ...styles.icon, ...styles.deleteIcon }}
        />
      </div>
    );
  };

  editComplete = (id) => {
    const value = this.state.inpValu[id];
    this.setState({
      edit: {
        ...this.state.edit,
        [id]: false,
      },
    });
  };

  editOn = (render) => {
    this.setState({
      edit: {
        ...this.state.edit,
        [render.id]: true,
      },
      inpValu:{
        ...this.state.inpValu,
        [render.id]: render.name,
      },
    });
  };

  handelChange = (id, value) => {
    this.setState({
        inpValu:{
          ...this.state.inpValu,
          [id]: value,
        },
    })
  };

  renderEdit = (value, index, render) => {
    return (
      <span>{this.state.edit[render.id] ? <Input onChange={this.handelChange.bind(this, render.id)} defaultValue={value} /> : value}</span>
    );
  };

  render() {
    const { floorSource } = this.props;

    let list = [];

    Object.keys(floorSource).map(function(key, index){
      list.push({
        id: key,
        name: floorSource[key],
      });
    });

    return (
      <div style={styles.editDialog}>
        <Button type="normal"
          style={{ borderRadius: '4px', marginLeft: 10 }}
          onClick={() => this.onOpen(floorSource)}
          >
          管理
        </Button>
        <Dialog
          style={{ width: 640 }}
          visible={this.state.visible}
          closable="esc,mask,close"
          onCancel={this.onClose}
          onClose={this.onClose}
          title="楼层管理"
        >
          <Table dataSource={list}>
            <Table.Column title="名称" dataIndex="name" width={150} cell={this.renderEdit} />
            <Table.Column title="操作" width={100} cell={this.renderOper} />
          </Table>
        </Dialog>
      </div>
    );
  }
}

const styles = {
  editDialog: {
    display: 'inline-block',
    marginRight: '5px',
  },
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
