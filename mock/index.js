module.exports = {
  'GET /api/v1/profile': {
    name: '石蕴金',
    department: 'user',
    avatar: 'https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png',
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

  'POST /api/v1/rom/:code/machine/:ip/delete': (req, res) => {
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
        machine: '1台',
        admin: '时尚',
      },
      {
        floor: '444',
        name: `教六403`,
        code: 'dx403',
        device: '计算机',
        machine: '1台',
        admin: '时尚',
      },
      {
        floor: '333',
        name: `教六403`,
        code: 'dx403',
        device: '计算机',
        machine: '1台',
        admin: '时尚',
      },
      {
        floor: '444',
        name: `教六403`,
        code: 'dx403',
        device: '计算机',
        machine: '1台',
        admin: '时尚',
      },
      {
        floor: '333',
        name: `教六403`,
        code: 'dx403',
        device: '计算机',
        machine: '1台',
        admin: '时尚',
      },
    ],
  },

  'POST /api/v1/lab/add': {
    "status": 200,
    "statusText": "ok",
    "data": {
      floor: '333',
      name: `教六403`,
      code: 'dx403',
      device: '计算机',
      machine: '1台',
      admin: '时尚',
    },
  },
  
};
