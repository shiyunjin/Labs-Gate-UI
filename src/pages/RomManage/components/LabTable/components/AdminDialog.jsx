import React, { Component } from 'react';
import { Dialog, Button, Form, Input, Field, Select, Icon } from '@icedesign/base';
import axios from 'axios';

const FormItem = Form.Item;

export default class AdminDialog extends Component {
  static displayName = 'AdminDialog';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      floorSource: [],
      inpValu: {},
    };
    this.field = new Field(this);
  }

  onOk = () => {
    this.setState({
      visible: false,
    });
    const admin = this.state.inpValu.admin.split("\n").filter(function(n){return n});
    this.props.editOn(this.props.index, admin);
  };

  onOpen = (index, record) => {
    this.field.setValues({ ...record });
    console.info(record);
    this.setState({
      visible: true,
      floorSource: this.props.floorSource,
      inpValu:{
        'admin': record.admin.join("\n") + "\n",
      },
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  floorData = () => {
    const { floorSource } = this.props;
    let list = [];
    Object.keys(floorSource).forEach(key => {
      list.push({
        value: key,
        label: floorSource[key],
      });
    });
    return list;
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
    const { index, record } = this.props;
    const { floorSource, inpValu } = this.state;
    const formItemLayout = {
      labelCol: {
        fixedSpan: 6,
      },
      wrapperCol: {
        span: 14,
      },
    };

    return (
      <div style={styles.editDialog}>
        <Icon
          type="account-filling"
          size="small"
          style={{ ...styles.icon, ...styles.AdminIcon }}
          onClick={() => this.onOpen(index, record)}
        />
        <Dialog
          style={{ width: 640 }}
          visible={this.state.visible}
          onOk={this.onOk}
          closable="esc,mask,close"
          onCancel={this.onClose}
          onClose={this.onClose}
          title="管理员设置"
        >
          <Form direction="ver" field={this.field}>
            <FormItem label="管理员：" {...formItemLayout}>
              <Input
                name="admin"
                multiple
                placeholder="dx603"
                style={{width: "100%"}}
                defaultValue={inpValu.admin}
                onChange={this.handelChange.bind(this, 'admin')}
              />
              填写用户名一行一个
            </FormItem>
          </Form>
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
  AdminIcon: {
    marginLeft: '20px',
  },
  icon: {
    color: '#2c72ee',
    cursor: 'pointer',
  },
};
