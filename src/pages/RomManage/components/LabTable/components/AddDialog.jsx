import React, { Component } from 'react';
import { Dialog, Button, Form, Input, Field, Select, Icon } from '@icedesign/base';
import axios from 'axios';

const FormItem = Form.Item;

export default class AddDialog extends Component {
  static displayName = 'AddDialog';

  static defaultProps = {
    floorSource: {},
    addLabAction: () => {},
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
      this.props.addLabAction(values);
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
        <Button type="primary" style={{borderRadius: '4px'}} onClick={() => this.onOpen()}>
          <Icon type="add" size="xs" style={{ marginRight: '4px' }} />添加实验室
        </Button>
        <Dialog
          style={{ width: 640 }}
          visible={this.state.visible}
          onOk={this.handleSubmit}
          closable="esc,mask,close"
          onCancel={this.onClose}
          onClose={this.onClose}
          title="添加实验室"
        >
          <Form direction="ver" field={this.field}>
            <FormItem label="楼层：" {...formItemLayout}>
              <Select
                {...init('floor', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
                dataSource={this.floorData()}
              ></Select>
            </FormItem>
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
            <FormItem label="VLAN：" {...formItemLayout}>
              <Input
                {...init('vlan', {
                  rules: [{ required: true, message: '必填选项' }],
                })}
              />
            </FormItem>
            <FormItem label="设备：" {...formItemLayout}>
              <Input
                {...init('device', {
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
