import React, { Component } from 'react';
import { Dialog, Button, Form, Input, Field, Select, Icon } from '@icedesign/base';
import axios from 'axios';

const FormItem = Form.Item;

export default class AddDialog extends Component {
  static displayName = 'AddDialog';

  static defaultProps = {
    floorSource: {},
    addAction: () => {},
  };

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
      this.setState({
        visible: false,
      });
      this.props.addAction(values);
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
        <Button style={{borderRadius: '4px'}} onClick={() => this.onOpen()}>
          <Icon type="add" size="xs" style={{ marginRight: '4px' }} />添加设备
        </Button>
        <Dialog
          style={{ width: 640 }}
          visible={this.state.visible}
          onOk={this.handleSubmit}
          closable="esc,mask,close"
          onCancel={this.onClose}
          onClose={this.onClose}
          title="添加设备"
        >
          <Form direction="ver" field={this.field}>
            <FormItem label="名称：" {...formItemLayout}>
              <Input
                {...init('name', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="代码：" {...formItemLayout}>
              <Input
                {...init('code', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
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
