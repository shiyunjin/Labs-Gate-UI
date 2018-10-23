import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '@icedesign/layout';
import { routerData } from '../../routerConfig';

export default class BlankLayout extends Component {
  static displayName = 'BlankLayout';

  static propTypes = {};

  static defaultProps = {};

  render() {
    return <Layout style={styles.container}>
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
      </Switch>
    </Layout>;
  }
}

const styles = {
  container: {
    minHeight: '100vh',
  },
};
