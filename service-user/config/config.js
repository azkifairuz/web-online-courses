require("dotenv").config();

const {
  DB_NAME,
  DB_UNAME,
  DB_PSWD,
  DB_HOSTNAME
} = process.env
module.exports ={
  "development": {
    "username": DB_UNAME,
    "password": DB_PSWD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": "mysql"
  },
  "test": {
    "username": DB_UNAME,
    "password": DB_PSWD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": "mysql"
  },
  "production": {
    "username": DB_UNAME,
    "password": DB_PSWD,
    "database": DB_NAME,
    "host": DB_HOSTNAME,
    "dialect": "mysql"
  }
}
