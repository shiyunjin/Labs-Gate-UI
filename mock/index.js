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
};
