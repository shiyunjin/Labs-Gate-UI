import React, { Component } from 'react';
import { Dialog, Button, Form, Input, Field, Select, Icon } from '@icedesign/base';
import axios from 'axios';

const FormItem = Form.Item;

export default class AddFloorDialog extends Component {
  static displayName = 'AddFloorDialog';

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
        .post("/api/v1/floor/add", {
          name:       values.name,
        })
        .then((response) => {
          this.setState({
            visible: false,
          });
          this.props.addFloorAction(values, response.data.data);
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
        <Button type="normal"
          style={{ borderRadius: '4px', marginLeft: 10 }}
          onClick={() => this.onOpen()}
        >
          添加楼层
        </Button>
        <Dialog
          style={{ width: 640 }}
          visible={this.state.visible}
          onOk={this.handleSubmit}
          closable="esc,mask,close"
          onCancel={this.onClose}
          onClose={this.onClose}
          title="添加楼层"
        >
          <Form direction="ver" field={this.field}>
            <FormItem label="楼层名：" {...formItemLayout}>
              <Input
                {...init('name', {
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
