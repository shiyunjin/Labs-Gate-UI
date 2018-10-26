// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import { getRouterData } from './utils/utils';
import { asideMenuConfig } from './menuConfig';

import BasicLayout from './layouts/BasicLayout';
import BlankLayout from './layouts/BlankLayout';
import HomeLayout from './layouts/HomeLayout';
import UserLayout from './layouts/UserLayout';
import UserLogin from './pages/UserLogin';
import Dashboard from './pages/Dashboard';
import Charts from './pages/Charts';
import Portlets from './pages/Portlets';
import Result from './pages/Result';
import Fail from './pages/Fail';
import ServerError from './pages/ServerError';
import Forbidden from './pages/Forbidden';
import Empty from './pages/Empty';
import List from './pages/List';
import CardList from './pages/CardList';
import BasicTable from './pages/BasicTable';
import TableDisplay from './pages/TableDisplay';

import RomControl from './pages/RomControl';

import RomMachine from './pages/RomMachine';

import Status from './pages/Status';

import Device from './pages/Device';

import Security from './pages/Security';

import User from './pages/User';

import NotFound from './pages/NotFound';

var routerConfig = [
  {
    path: '/table/table-display',
    component: TableDisplay,
    layout: BasicLayout,
  },
  {
    path: '/exception/403',
    component: Forbidden,
    layout: BasicLayout,
  },
  {
    path: '/chart/chart-list',
    component: Charts,
    layout: BasicLayout,
  },
  {
    path: '/list/article-list',
    component: List,
    layout: BasicLayout,
  },
  {
    path: '/list/card-list',
    component: CardList,
    layout: BasicLayout,
  },
  {
    path: '/result/success',
    component: Result,
    layout: BasicLayout,
  },
  {
    path: '/table/basic-table',
    component: BasicTable,
    layout: BasicLayout,
  },
  {
    path: '/portlets/base',
    component: Portlets,
    layout: BasicLayout,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    layout: BasicLayout,
  },
  {
    path: '/exception/500',
    component: ServerError,
    layout: BasicLayout,
  },
  {
    path: '/result/fail',
    component: Fail,
    layout: BasicLayout,
  },
  {
    path: '/exception/204',
    component: Empty,
    layout: BasicLayout,
  },
  {
    path: '/user/login',
    component: UserLogin,
    layout: UserLayout,
  },
  {
    path: '/rom/control/:code',
    layout: BasicLayout,
    component: RomControl,
  },
  {
    path: '/rom/control',
    layout: BasicLayout,
    component: RomControl,
  },
  {
    path: '/rom/machine',
    layout: BasicLayout,
    component: RomMachine,
  },
  {
    path: '/status',
    layout: BasicLayout,
    component: Status,
  },
  {
    path: '/device',
    layout: BasicLayout,
    component: Device,
  },
  {
    path: '/security',
    layout: BasicLayout,
    component: Security,
  },
  {
    path: '/user',
    layout: BasicLayout,
    component: User,
  },
];

const routerBase = [
  {
    path: '/',
    component: null,
    layout: HomeLayout,
  },
  {
    path: '',
    component: NotFound,
    layout: BlankLayout,
  },
];

routerConfig = routerConfig.concat(routerBase);

const routerData = getRouterData(routerConfig, asideMenuConfig);

export { routerData, routerConfig };
