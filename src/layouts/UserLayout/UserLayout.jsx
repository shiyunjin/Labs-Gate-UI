import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from '@icedesign/base';
import LoginIntro from '../../components/LoginIntro';
const { Row, Col } = Grid;
import { routerData } from '../../routerConfig';

export default class UserLayout extends Component {
  static displayName = 'UserLayout';

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div style={styles.container}>
        <Row wrap>
          <Col l="12">
            <LoginIntro />
          </Col>
          <Col l="12">
            <div style={styles.content}>
              <Switch>
                {routerData.map((item, index) => {
                  return item.component ? (
                    <Route
                      key={index}
                      path={item.path}
                      component={item.component}
                      exact={item.exact}
                    />
                  ) : null;
                })}
                <Redirect exact from="/user" to="/user/login" />
              </Switch>
              </div>
          </Col>
        </Row>
        
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'relative',
    width: '100wh',
    minWidth: '1200px',
    height: '100vh',
    backgroundImage: `url(${require('./images/bg.jpg')})`,
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
};
