const mysql = require('mysql');
const util = require('util');
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"bangtani2022",
});

conn.query = util.promisify(conn.query).bind(conn);

conn.connect(function(err){
    if (err) {
        console.log(err.stack);
        return;
    };
    console.log("Terkoneksi");
});

module.exports = conn;