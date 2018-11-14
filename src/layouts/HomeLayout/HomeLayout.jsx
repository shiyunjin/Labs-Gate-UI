import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Authorized from '../../components/Authorized/Authorized';


export default class HomeLayout extends Component {
  static displayName = 'HomeLayout';

  static propTypes = {};

  static defaultProps = {};

  render() {
    return <Switch>
        <Authorized
          authority={["user", "admin"]}
          noMatch={
            <Route
              render={() => <Redirect to="/user/login" />}
            />
          }
        >
          {/* 首页默认重定向到 /rom/control */}
          <Redirect exact from="/" to="/rom/control" />
        </Authorized>
      </Switch>;
  }
}