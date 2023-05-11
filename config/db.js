const mysql = require("mysql2")
require("dotenv").config()

const pool = mysql.createPool({
    connectionLimit: 20,
    host:process.env.HOST,
    user:'root',
    password:process.env.PASSWORD,
    database:process.env.DB_NAME,
}).promise()

module.exports= pool
 
