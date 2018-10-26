import React, { Component } from 'react';
import { Dialog, Button, Form, Input, Field, Select } from '@icedesign/base';
import axios from 'axios';

const FormItem = Form.Item;

export default class AddDialog extends Component {
  static displayName = 'AddDialog';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.field = new Field(this);
  }

  handleSubmit = () => {
    this.field.validate((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      axios
        .post("/api/v1/user/add", {
          username:   values.username,
          name:       values.name,
          auth:       values.auth,
        })
        .then((response) => {
          this.setState({
            visible: false,
          });
          this.props.addUserAction(values);
        });
    });
  };

  onOpen = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const init = this.field.init;
    const { resetButton, resetInput, disableReset, resetInputText } = this.state;
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
        <Button
          onClick={() => this.onOpen()}
        >
          新建用户
        </Button>
        <Dialog
          style={{ width: 640 }}
          visible={this.state.visible}
          onOk={this.handleSubmit}
          closable="esc,mask,close"
          onCancel={this.onClose}
          onClose={this.onClose}
          title="新建用户"
        >
          <Form direction="ver" field={this.field}>
            <FormItem label="用户名：" {...formItemLayout}>
              <Input
                {...init('username', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="姓名：" {...formItemLayout}>
              <Input
                {...init('name', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>

            <FormItem label="权限：" {...formItemLayout}>
              <Select
                {...init('auth', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              >
                <Option value="user">user</Option>
                <Option value="admin">admin</Option>
              </Select>
            </FormItem>

            <FormItem label="" {...formItemLayout}>
              密码请生成后重置获取
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
};
