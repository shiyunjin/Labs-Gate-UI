// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/shiyunjin/SchoolNetwork/issues',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '帮助',
    path: 'https://www.shiyunjin.cn',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home2',
    authority: ['user', 'admin'],
  },
  {
    name: '实验室控制',
    path: '/rom',
    icon: 'chart1',
    authority: ['user', 'admin'],
    children: [
      {
        name: '网络管理',
        path: '/rom/control',
      },
      {
        name: '机器管理',
        path: '/rom/machine',
      },
    ],
  },
  {
    name: '用户管理',
    path: '/user',
    icon: 'publish',
    authority: ['admin'],
  },
  {
    name: '网络状态',
    path: '/status',
    icon: 'table',
    authority: ['user', 'admin'],
  },
  {
    name: '网络设备',
    path: '/device',
    icon: 'ul-list',
    authority: ['user', 'admin'],
  },
  {
    name: '安全中心',
    path: '/security',
    icon: 'key',
    authority: ['user', 'admin'],
  },
  {
    name: '基础详情页',
    path: '/portlets/base',
  },
  {
    name: '条款协议页',
    path: '/portlets/terms',
  },
];

export { headerMenuConfig, asideMenuConfig };
