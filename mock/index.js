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
  
};
