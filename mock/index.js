module.exports = {
  'GET /api/v1/profile': {
    name: '石蕴金',
    department: 'user',
    avatar: '/public/avatar.png',
  },

  'POST /api/v1/login': (req, res) => {
    const { password, username } = req.body;
    if (username === 'admin' && password === 'admin') {
      res.send({
        status: 200,
        statusText: 'ok',
        currentAuthority: 'admin',
      });
    } else if (username === 'user' && password === 'user') {
      res.send({
        status: 200,
        statusText: 'ok',
        currentAuthority: 'user',
      });
    } else {
      res.send({
        status: 401,
        statusText: 'unauthorized',
        currentAuthority: 'guest',
      });
    }
  },

  'POST /api/v1/logout': (req, res) => {
    res.send({
      status: 200,
      statusText: 'ok',
      currentAuthority: 'guest',
    });
  },

  'GET /api/v1/authority': (req, res) => {
    res.send({
      status: 200,
      statusText: 'ok',
      currentAuthority: 'admin',
    });
  },

  'GET /api/v1/user/list': {
    "status": 200,
    "statusText": "ok",
    "data": {
      "all": [
        {
          "id": "123123",
          "username": "syj",
          "name": "石蕴金",
          "auth": "admin",
          "date": "2017-02-11",
        },
        {
          "id": "321321",
          "username": "test",
          "name": "test",
          "auth": "user",
          "date": "2017-02-12",
        },
      ],
      "user": [
        {
          "id": "321321",
          "username": "test",
          "name": "test",
          "auth": "user",
          "date": "2017-02-12",
        },
      ],
      "admin": [
        {
          "id": "123123",
          "username": "syj",
          "name": "石蕴金",
          "auth": "admin",
          "date": "2017-02-11",
        },
      ],
    },
  },

  'POST /api/v1/user/reset': {
    "status": 200,
    "statusText": "ok",
    "data": "newpasshere",
  },

  'POST /api/v1/user/edit': {
    "status": 200,
    "statusText": "ok",
  },

  'POST /api/v1/user/del': (req, res) => {
    const { id, name, auth } = req.body;
    if (id == '123123') {
      res.send({
        "status": 403,
        "statusText": "forbidden",
      });
    } else {
      res.send({
        "status": 200,
        "statusText": "ok",
      });
    }
  },

  'POST /api/v1/user/add': {
    "status": 200,
    "statusText": "ok",
  },

  'POST /api/v1/user/pass': {
    "status": 200,
    "statusText": "ok",
  },

  'GET /api/v1/roms': {
    "status": 200,
    "statusText": "ok",
    "data": {
      tabs: [
        { tab: '3楼', key: 0 },
        { tab: '4楼', key: 1 },
        { tab: '5楼', key: 2 },
        { tab: '6楼', key: 3 },
      ],
      dataSource: [
        [
          {
            name: '教六603',
            code: 'dx603',
            desc: '本实验室机器数量：50台',
            acl: !true,
          },
          {
            name: '教六601',
            code: 'dx601',
            desc: '本实验室机器数量：50台',
            acl: true,
          },
          {
            name: '教六602',
            code: 'dx602',
            desc: '本实验室机器数量：50台',
            acl: !true,
          },
        ],
        [
          {
            name: '教六603',
            code: 'dx603',
            desc: '本实验室机器数量：50台',
            acl: !true,
          },
          {
            name: '教六601',
            code: 'dx601',
            desc: '本实验室机器数量：50台',
            acl: true,
          },
        ],
        [
          {
            name: '教六603',
            code: 'dx603',
            desc: '本实验室机器数量：50台',
            acl: !true,
          },
        ],
      ],
    },
  },

  'POST /api/v1/rom/dx603/open': (req, res) => {
    setTimeout(function () {
      res.send({
        "status": 200,
        "statusText": "ok",
      });
    }, 5000);
  },

  'POST /api/v1/rom/dx603/close': (req, res) => {
    setTimeout(function () {
      res.send({
        "status": 200,
        "statusText": "ok",
      });
    }, 5000);
  },

  'POST /api/v1/rom/dx601/open': (req, res) => {
    setTimeout(function () {
      res.send({
        "status": 200,
        "statusText": "ok",
      });
    }, 5000);
  },

  'POST /api/v1/rom/dx601/close': (req, res) => {
    setTimeout(function () {
      res.send({
        "status": 200,
        "statusText": "ok",
      });
    }, 5000);
  },

  'POST /api/v1/rom/dx602/open': (req, res) => {
    setTimeout(function () {
      res.send({
        "status": 200,
        "statusText": "ok",
      });
    }, 5000);
  },

  'POST /api/v1/rom/dx602/close': (req, res) => {
    setTimeout(function () {
      res.send({
        "status": 500,
        "statusText": "system error",
      });
    }, 5000);
  },

  'GET /api/v1/rom/:code/machine': {
    "status": 200,
    "statusText": "ok",
    "name": "教六603",
    "data": [
      {
        "ip":     "192.168.1.1",
        "mac":    "54:D5:1F:9F:E6:F9",
        "des":    "",
        "status": "OPEN",
      },
      {
        "ip": "192.168.1.2",
        "mac": "54:D5:1F:9F:E6:F9",
        "des": "",
        "status": "CLOSE",
      },
      {
        "ip": "192.168.1.3",
        "mac": "54:D5:1F:9F:E6:F9",
        "des": "",
        "status": "CLOSE",
      },
    ],
  },

  'POST /api/v1/rom/:code/machine/:ip/open': (req, res) => {
    setTimeout(function () {
      res.send({
        "status": 200,
        "statusText": "ok",
      });
    }, 5000);
  },

  'POST /api/v1/rom/:code/machine/:ip/close': (req, res) => {
    setTimeout(function () {
      res.send({
        "status": 200,
        "statusText": "ok",
      });
    }, 5000);
  },

  'POST /api/v1/rom/:code/machine/:ip/del': (req, res) => {
    res.send({
      "status": 200,
      "statusText": "ok",
    });
  },
  
  'GET /api/v1/floor': {
    "status": 200,
    "statusText": "ok",
    "data": {
      "333":"3楼",
      "444":"4楼",
    },
  },

  'POST /api/v1/floor/add': {
    "status": 200,
    "statusText": "ok",
    "data":"666",
  },

  'POST /api/v1/floor/edit': {
    "status": 200,
    "statusText": "ok",
  },

  'POST /api/v1/floor/del': {
    "status": 200,
    "statusText": "ok",
  },

  'GET /api/v1/lab': {
    "status": 200,
    "statusText": "ok",
    "data": [
      {
        floor: '333',
        name: `教六403`,
        code: 'dx403',
        device: '计算机',
        vlan: 'dx403',
        machine: '1台',
        admin: ['syj'],
      },
      {
        floor: '444',
        name: `教六403`,
        code: 'dx407',
        device: '计算机',
        vlan: 'dx403',
        machine: '1台',
        admin: ['syj'],
      },
      {
        floor: '333',
        name: `教六403`,
        code: 'dx406',
        device: '计算机',
        vlan: 'dx403',
        machine: '1台',
        admin: ['syj'],
      },
      {
        floor: '444',
        name: `教六403`,
        code: 'dx405',
        device: '计算机',
        vlan: 'dx403',
        machine: '1台',
        admin: ['syj'],
      },
      {
        floor: '333',
        name: `教六403`,
        code: 'dx404',
        device: '计算机',
        vlan: 'dx403',
        machine: '1台',
        admin: ['syj'],
      },
    ],
  },

  'POST /api/v1/lab/add': {
    "status": 200,
    "statusText": "ok",
    "data": {
      floor: '333',
      name: `教六409`,
      code: 'dx403',
      device: '计算机',
      vlan: 'dx403',
      machine: '1台',
      admin: '时尚',
    },
  },

  'POST /api/v1/lab/del': {
    "status": 200,
    "statusText": "ok",
  },

  'POST /api/v1/lab/edit': {
    "status": 200,
    "statusText": "ok",
  },

  'POST /api/v1/lab/admin': {
    "status": 200,
    "statusText": "ok",
  },

  'GET /api/v1/device': {
    "status": 200,
    "statusText": "ok",
    "data": [
      {
        id: '111',
        name: `中心交换机`,
        code: 'core',
        ip: '192.168.63.254',
        username: 'jsj',
        vlan: ['dx603','dx604'],
        invalid: ["fast23","fast24"],
      },
    ],
  },

  'POST /api/v1/device/add': {
    "status": 200,
    "statusText": "ok",
    "data": {
      id: '222',
      name: `test交换机`,
      code: 'test',
      ip: '192.168.63.253',
      username: 'jsj',
      vlan: ['dx603','dx604'],
      invalid: ["fast23","fast24"],
    },
  },

  'POST /api/v1/device/del': {
    "status": 200,
    "statusText": "ok",
  },

  'POST /api/v1/device/edit': {
    "status": 200,
    "statusText": "ok",
  },

  'POST /api/v1/device/interface': {
    "status": 200,
    "statusText": "ok",
  },

  'GET /api/v1/device/bandwidth/core': {
    "data":[
      {"State":"Gi0/22","下载流量":4663889439823,"上传流量":9163349906558},
      {"State":"Gi0/2","下载流量":20800319,"上传流量":1757620420},
      {"State":"Gi0/6","下载流量":559852160267,"上传流量":15564361005133},
      {"State":"Gi0/10","下载流量":167801255754,"上传流量":3639121517023},
      {"State":"Gi0/14","下载流量":198771869846,"上传流量":2020456418872},
      {"State":"Gi0/18","下载流量":407409145766,"上传流量":1597180576582},
      {"State":"Gi0/17","下载流量":0,"上传流量":0},
      {"State":"Gi0/1","下载流量":1915858454929,"上传流量":126410597949},
      {"State":"Gi0/3","下载流量":8828054011,"上传流量":10884401009},
      {"State":"Gi0/4","下载流量":54587865270,"上传流量":313737531715},
      {"State":"Gi0/9","下载流量":28215806910,"上传流量":502784056271},
      {"State":"Gi0/11","下载流量":16317313262,"上传流量":188100348894},
      {"State":"Gi0/20","下载流量":641906977241,"上传流量":2349871851433},
      {"State":"Gi0/23","下载流量":1647726864440,"上传流量":4250663341499},
      {"State":"Gi0/24","下载流量":54343191071461,"上传流量":9482269759278},
      {"State":"Gi0/7","下载流量":82784833175,"上传流量":1584480841085},
      {"State":"Gi0/8","下载流量":1003678446122,"上传流量":1324715667570},
      {"State":"Gi0/12","下载流量":343688026021,"上传流量":3731837584846},
      {"State":"Gi0/15","下载流量":447279427898,"上传流量":2175152795834},
      {"State":"Gi0/16","下载流量":645438528359,"上传流量":1594740369268},
      {"State":"Gi0/5","下载流量":178760514114,"上传流量":1661395206112},
      {"State":"Gi0/13","下载流量":108139079943,"上传流量":46226147565},
      {"State":"Gi0/19","下载流量":0,"上传流量":0},
      {"State":"Gi0/21","下载流量":2888337205481,"上传流量":8226589347328}
    ],
    "status":200,
    "statusText":"ok"
  },
};
