import React, { Component } from 'react';
import { Dialog, Button, Form, Input, Field, Select } from '@icedesign/base';
import axios from 'axios';

const FormItem = Form.Item;

export default class EditDialog extends Component {
  static displayName = 'EditDialog';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      dataIndex: null,
      resetInput: false,
      resetInputText: null,
      disableReset: false,
      resetButton: true,
    };
    this.field = new Field(this);
  }

  handleSubmit = () => {
    this.field.validate((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }

      const { dataIndex } = this.state;
      this.props.getFormValues(dataIndex, values);
      this.setState({
        visible: false,
      });
    });
  };

  resetPass = (id) => {
    this.setState({
      disableReset: true,
    });
    axios
    .post('/api/v1/user/reset',{
      id: this.props.record.id,
    })
    .then((response) => {
      console.info(response);
      this.setState({
        resetButton: false,
        resetInputText: response.data.data,
        resetInput: true,
      });
    })
  };

  onOpen = (index, record) => {
    this.field.setValues({ ...record });
    this.setState({
      visible: true,
      dataIndex: index,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const init = this.field.init;
    const { index, record } = this.props;
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
          size="small"
          type="primary"
          onClick={() => this.onOpen(index, record)}
        >
          编辑
        </Button>
        <Dialog
          style={{ width: 640 }}
          visible={this.state.visible}
          onOk={this.handleSubmit}
          closable="esc,mask,close"
          onCancel={this.onClose}
          onClose={this.onClose}
          title="编辑"
        >
          <Form direction="ver" field={this.field}>
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

            <FormItem label="密码：" {...formItemLayout}>
              {resetButton ?
                <Button
                  size="small"
                  type="primary"
                  onClick={this.resetPass}
                  disabled={disableReset}
                >
                  重置密码
                </Button>
              : null}
              {resetInput ? <Input value={resetInputText} /> : null}
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
