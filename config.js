require('dotenv').config();

module.exports = {
  remoteDB: process.env.REMOTE_DB,
  api: {
    port: process.env.API_PORT,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
  mysqlService: { 
    host: process.env.MYSQL_SRV_HOST,
    port: process.env.MYSQL_SRV_PORT,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
  },
  cacheService: {
    host: process.env.MYSQL_SRV_HOST,
    port: process.env.MYSQL_SRV_PORT,
  },
  post: {
    port: process.env.POST_PORT,
  },
};