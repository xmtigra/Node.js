var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'node'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://admin:admin@ds151431.mlab.com:51431/pyvovarchuk'
  },

  test: {
    root: rootPath,
    app: {
      name: 'node'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/node-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'node'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://admin:admin@ds151431.mlab.com:51431/pyvovarchuk'
  }
};

module.exports = config[env];


