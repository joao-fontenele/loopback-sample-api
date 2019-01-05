module.exports = {
  mongo: {
    // host: '',
    // port: 0,
    // database: '',
    // password: '',
    // user: '',
    url: process.env.MONGO_URL,
    name: 'mongo',
    connector: 'mongodb',
  },
  mysql: {
    // host: 'mysql',
    // database: 'datastore',
    // password: 'user',
    // user: 'user',
    url: process.env.MYSQL_URL,
    name: 'mysql',
    connector: 'mysql',
  },
};
