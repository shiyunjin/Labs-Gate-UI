import React, { Component } from 'react';
import { Grid, Icon, Feedback } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import PropTypes from 'prop-types';
import axios from 'axios';

const { Row, Col } = Grid;

export default class Card extends Component {
  static displayName = 'Card';

  static propTypes = {};

  static defaultProps = {};

  static propTypes = {
    item: PropTypes.object,
  };

  static defaultProps = {
    item: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      hanging: false,
      acl: true,
    };
  };

  componentDidMount() {
    const { item } = this.props;
    this.setState({
      acl: item.acl,
    });
  }

  openNet = () => {
    const { item } = this.props;
    this.setState({
      hanging: true,
    });
    axios
      .post('/api/v1/rom/' + item.code + '/open' )
      .then((response) => {
        if (response.data.status === 200) {
          this.setState({
            hanging: false,
            acl: false,
          });
          Feedback.toast.success('切换网络状态成功');
        } else {
          this.setState({
            hanging: false,
          });
          Feedback.toast.prompt('切换网络状态失败');
        }
      })
      .catch((error) => {
        this.setState({
          hanging: false,
        });
        Feedback.toast.error('请求错误');
        console.log(error);
      });
  };

  closeNet = () => {
    const { item } = this.props;
    this.setState({
      hanging: true,
    });
    axios
      .post('/api/v1/rom/' + item.code + '/close' )
      .then((response) => {
        if (response.data.status === 200) {
          this.setState({
            hanging: false,
            acl: true,
          });
          Feedback.toast.success('切换网络状态成功');
        } else {
          this.setState({
            hanging: false,
          });
          Feedback.toast.prompt('切换网络状态失败');
        }
      })
      .catch((error) => {
        this.setState({
          hanging: false,
        });
        Feedback.toast.error('请求错误');
        console.log(error);
      });
  };

  render() {
    const { item } = this.props;
    const { hanging, acl } = this.state;

    return (
      <Col l="6" m="6" s="8" xs="12" xxs="24" style={styles.col}>
        <IceContainer style={styles.container}>
          <div style={styles.body}>
            <h5 style={styles.name}>{item.name}</h5>
            <p style={styles.desc}>{item.desc}</p>
            <div style={acl ? styles.close : styles.open}>{acl ? 'CLOSE' : 'OPEN'}</div>
          </div>
          <div style={styles.footer}>
            <a href={"#/rom/control/" + item.code} style={{ ...styles.link, ...styles.line }}>
              <Icon type="box" size="small" style={styles.icon} />{' '}
              机器控制
            </a>
            {acl ? 
              <span style={styles.link} onClick={hanging ? () => {} : this.openNet}>
                {hanging ? [
                    (<Icon type="loading" size="small" style={styles.icon} key="0" />),
                    ('正在处理'),
                  ]:[
                    (<Icon type="process" size="small" style={styles.icon} key="1" />),
                    ('开启外网'),
                  ]
                }
              </span>
            :
              <span style={styles.link} onClick={hanging ? () => {} : this.closeNet}>
                {hanging ? [
                    (<Icon type="loading" size="small" style={styles.icon} key="0" />),
                    ('正在处理'),
                  ]:[
                    (<Icon type="process" size="small" style={styles.icon} key="1" />),
                    ('关闭外网'),
                  ]
                }
              </span>
            }
          </div>
        </IceContainer>
      </Col>
    );
  }
}

const styles = {
  container: {
    padding: '0',
  },
  body: {
    padding: '20px',
    height: '100px',
    position: 'relative',
    borderBottom: '1px solid #f0f0f0',
  },
  name: {
    margin: '0',
    padding: '0',
    height: '28px',
    lineHeight: '28px',
    fontSize: '16px',
    color: '#0d1a26',
  },
  desc: {
    fontSize: '14px',
    color: '#697b8c',
    margin: '12px 0',
  },
  close: {
    background: '#fff0f6',
    border: '1px solid #ffadd2',
    color: '#eb2f96',
    position: 'absolute',
    right: '20px',
    top: '20px',
    padding: '4px 12px',
    textAlign: 'center',
    borderRadius: '50px',
  },
  open: {
    background: '#BEEEE0',
    border: '1px solid #aae9cc',
    color: '#1A9874',
    position: 'absolute',
    right: '20px',
    top: '20px',
    padding: '4px 12px',
    textAlign: 'center',
    borderRadius: '50px',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  link: {
    height: '56px',
    lineHeight: '56px',
    color: '#314659',
    cursor: 'pointer',
    textDecoration: 'none',
    width: '50%',
    textAlign: 'center',
  },
  line: {
    borderRight: '1px solid #f0f0f0',
  },
  icon: {
    marginRight: '5px',
  },
  col: {
    paddingLeft: '10px',
    paddingRight: '10px',
  },
};
