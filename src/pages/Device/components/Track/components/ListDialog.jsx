import React, { Component } from 'react';
import { Dialog, Button, Form, Table, Icon, Input } from '@icedesign/base';
import DeleteBalloon from './DeleteBalloon';
import axios from 'axios';

const FormItem = Form.Item;

export default class ListDialog extends Component {
  static displayName = 'ListDialog';

  static defaultProps = {
    editOn: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      devSource: {
        vlan: [],
        invalid: [],
      },
      inpValu: {},
    };
  }

  onOpen = () => {
    this.setState({
      visible: true,
      devSource: this.props.devSource,
      inpValu:{
        'vlan': this.props.devSource.vlan.join("\n") + "\n",
        'invalid': this.props.devSource.invalid.join("\n") + "\n",
      },
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onOk = () => {
    this.setState({
      visible: false,
    });
    const vlan = this.state.inpValu.vlan.split("\n").filter(function(n){return n});
    const invalid = this.state.inpValu.invalid.split("\n").filter(function(n){return n});
    this.props.editOn(this.props.index, vlan, invalid);
  };

  handelChange = (key, value) => {
    this.setState({
        inpValu:{
          ...this.state.inpValu,
          [key]: value,
        },
    })
  };

  render() {
    const { devSource, inpValu } = this.state;

    return (
      <div style={styles.editDialog}>
        <a
          style={styles.link}
          onClick={() => this.onOpen()}
        >接口</a>
        <Dialog
          style={{ width: 640 }}
          visible={this.state.visible}
          closable="esc,mask,close"
          onClose={this.onClose}
          onCancel={this.onClose}
          onOk={this.onOk}
          title="接口设置"
        >
          <p>VLAN：</p>
          <Input
            name="vlan"
            multiple
            placeholder="dx603"
            style={{width: "100%"}}
            defaultValue={inpValu.vlan}
            onChange={this.handelChange.bind(this, 'vlan')}
          />
          <p>集联端口：</p>
          <Input
            name="invalid"
            multiple
            placeholder="fast23"
            style={{width: "100%"}}
            defaultValue={inpValu.invalid}
            onChange={this.handelChange.bind(this, 'invalid')}
          />
          <p>一行一个</p>
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
  link: {
    margin: '0 5px',
    color: 'rgba(49, 128, 253, 0.65)',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};
