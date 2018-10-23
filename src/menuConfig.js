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
    name: '网络控制',
    path: '/chart',
    icon: 'chart1',
    authority: ['user', 'admin'],
    children: [
      {
        name: '常用图表',
        path: '/chart/chart-list',
        authority: 'admin',
      },
    ],
  },
  {
    name: '网络状态',
    path: '/table',
    icon: 'table',
    authority: ['user', 'admin'],
    children: [
      {
        name: '基础表格',
        path: '/table/basic-table',
        authority: 'admin',
      },
      {
        name: '常用竖向表格',
        path: '/table/table-display',
        authority: ['user', 'admin'],
      },
    ],
  },
  {
    name: '网络设备',
    path: '/list',
    icon: 'ul-list',
    authority: ['user', 'admin'],
    children: [
      {
        name: '搜索列表',
        path: '/list/article-list',
      },
      {
        name: '卡片列表',
        path: '/list/card-list',
      },
    ],
  },
  {
    name: '用户管理',
    path: '/portlets',
    icon: 'publish',
    authority: ['user', 'admin'],
    children: [
      {
        name: '基础详情页',
        path: '/portlets/base',
      },
      {
        name: '条款协议页',
        path: '/portlets/terms',
      },
    ],
  },
  {
    name: '安全中心',
    path: '/result',
    icon: 'result',
    authority: ['user', 'admin'],
    children: [
      {
        name: '成功',
        path: '/result/success',
      },
      {
        name: '失败',
        path: '/result/fail',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
