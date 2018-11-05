import React, { Component } from 'react';
import { Dialog, Button, Form, Table, Icon, Input } from '@icedesign/base';
import DeleteBalloon from './DeleteBalloon';
import axios from 'axios';

const FormItem = Form.Item;

export default class ListDialog extends Component {
  static displayName = 'ListDialog';

  static defaultProps = {
    setFloorAction: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      floorSource: {},
      edit: {},
      inpValu: {},
    };
  }

  onOpen = () => {
    this.setState({
      visible: true,
      floorSource: this.props.floorSource,
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
            onClick={this.editComplete.bind(this, render)}
          />
          :
          <Icon
            type="edit"
            size="small"
            style={{ ...styles.icon, ...styles.editIcon }}
            onClick={this.editOn.bind(this, render)}
          />
        }
        <DeleteBalloon
          handleRemove={() => this.deleteOn(render)}
        />
      </div>
    );
  };

  editComplete = (render) => {
    const value = this.state.inpValu[render.id];
    axios
      .post("/api/v1/floor/edit", {
        id: render.id,
        name: render.name,
      })
      .then((response) => {
        this.setState({
          edit: {
            ...this.state.edit,
            [render.id]: false,
          },
          floorSource: {
            ...this.state.floorSource,
            [render.id]: value,
          },
        });
        this.props.setFloorAction({
          ...this.state.floorSource,
          [render.id]: value,
        });
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

  deleteOn = (render) => {
    const data = this.state.floorSource;

    axios
      .post("/api/v1/floor/del", {
        id: render.id,
      })
      .then((response) => {
        delete data[render.id];
        this.setState({
          floorSource: data,
        });
        this.props.setFloorAction(data);
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
      <span>{this.state.edit[render.id] ? <Input onChange={this.handelChange.bind(this, render.id)} defaultValue={value} /> : render.name}</span>
    );
  };



  render() {
    const { floorSource } = this.state;

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
          onClick={() => this.onOpen()}
          >
          管理
        </Button>
        <Dialog
          style={{ width: 640 }}
          visible={this.state.visible}
          closable="esc,mask,close"
          onClose={this.onClose}
          footer={<span></span>}
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
