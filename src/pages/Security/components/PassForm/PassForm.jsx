/* eslint  react/no-string-refs: 0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Radio, Feedback, Grid } from '@icedesign/base';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import './PassForm.scss';
import axios from 'axios';

const { Row, Col } = Grid;

export default class PassForm extends Component {
  static displayName = 'PassForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        oldpassword: '',
        newpassword: '',
        repassword: '',
      },
    };
  }


  checkPasswd = (rule, values, callback) => {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values.length < 8) {
      callback('密码必须大于8位');
    } else if (values.length > 16) {
      callback('密码必须小于16位');
    } else {
      callback();
    }
  };

  checkPasswd2 = (rule, values, callback, stateValues) => {
    if (!values) {
      callback('请输入正确的密码');
    } else if (values && values !== stateValues.newpassword) {
      callback('两次输入密码不一致');
    } else {
      callback();
    }
  };

  handleSubmit = () => {
    this.refs.form.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      axios
        .post('/api/v1/user/pass', {
          oldpassword: values.oldpassword,
          newpassword: values.newpassword,
          repassword: values.repassword,
        })
        .then((response) => {
          if (response.data.status === 200) {
            Feedback.toast.success('修改成功');
          } else {
            Feedback.toast.error('原密码错误');
          }
        });
    });
  };

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    return (
      <div className="pass-form">
        <IceContainer>
          <IceFormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
            ref="form"
          >
            <div style={styles.formContent}>
              <h2 style={styles.formTitle}>安全中心</h2>

              <Row style={styles.formItem}>
                <Col xxs="6" s="3" l="3" style={styles.label}>
                  原密码：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder
                    type="string"
                    name="oldpassword"
                    required
                    message="请输入正确的原密码"
                  >
                    <Input
                      size="large"
                      htmlType="password"
                      placeholder="请输入新密码"
                    />
                  </IceFormBinder>
                  <IceFormError name="oldpassword" />
                </Col>
              </Row>

              <Row style={styles.formItem}>
                <Col xxs="6" s="3" l="3" style={styles.label}>
                  新密码 ：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder
                    name="newpassword"
                    required
                    validator={this.checkPasswd}
                  >
                    <Input
                      size="large"
                      htmlType="password"
                      placeholder="至少8位密码"
                    />
                  </IceFormBinder>
                  <IceFormError name="newpassword" />
                </Col>
              </Row>

              <Row style={styles.formItem}>
                <Col xxs="6" s="3" l="3" style={styles.label}>
                  重复密码：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder
                    name="repassword"
                    required
                    validator={(rule, values, callback) =>
                      this.checkPasswd2(
                        rule,
                        values,
                        callback,
                        this.state.value
                      )
                    }
                  >
                    <Input
                      size="large"
                      htmlType="password"
                      placeholder="确认密码"
                    />
                  </IceFormBinder>
                  <IceFormError name="repassword" />
                </Col>
              </Row>
            </div>
          </IceFormBinderWrapper>

          <Row style={{ marginTop: 20 }}>
            <Col offset="3">
              <Button
                size="large"
                type="primary"
                style={{ width: 100 }}
                onClick={this.handleSubmit}
              >
                提 交
              </Button>
            </Col>
          </Row>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  label: {
    textAlign: 'right',
  },
  formContent: {
    width: '100%',
    position: 'relative',
  },
  formItem: {
    alignItems: 'center',
    marginBottom: 25,
  },
  formTitle: {
    margin: '0 0 20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
  },
};
