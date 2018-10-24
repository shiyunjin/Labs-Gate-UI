/**
 * 定义应用路由
 */
import { Switch, Route } from 'react-router-dom';
import React from 'react';

import { routerConfig } from './routerConfig';
import BasicLayout from './layouts/BasicLayout';


// 按照 Layout 归类分组可以按照如下方式组织路由
const router = () => {
  return (
    <Switch>
      {routerConfig.map((item, index) => {
          if (item.path)
            return item.layout ? (
              <Route
                exact
                key={index}
                path={item.path}
                component={item.layout}
              />
            ) : (
              <Route
                exact
                key={index}
                path={item.path}
                component={BasicLayout}
              />
            );
          else return (
            <Route
              key={index}
              component={item.layout}
            />
          )
        })}
    </Switch>
  );
};

export default router;
