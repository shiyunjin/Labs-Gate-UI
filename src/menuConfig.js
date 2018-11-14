// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/shiyunjin/Labs-Gate/issues',
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
    name: '网络管理',
    path: '/rom/control',
    icon: 'home2',
    authority: ['user', 'admin'],
  },
  {
    name: '实验室管理',
    path: '/rom/manage',
    icon: 'chart1',
    authority: ['admin'],
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
    authority: ['admin'],
  },
  {
    name: '网络设备',
    path: '/device',
    icon: 'ul-list',
    authority: ['admin'],
  },
  {
    name: '安全中心',
    path: '/security',
    icon: 'key',
    authority: ['user', 'admin'],
  },
];

export { headerMenuConfig, asideMenuConfig };
