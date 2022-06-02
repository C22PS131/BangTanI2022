const { nanoid } = require('nanoid');
const users = require('./users');

const addUserHandler = (request, h) => {
    const {
         nm_koperasi, email, password, alamat, luas_lahan, bd_pertanian
    } = request.payload;

    const id = nanoid (16);
    
    var mysql = require('mysql');

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO `user` (`kd_koperasi`, `nm_koperasi`, `email`, `password`, `alamat`, `luas_lahan`, `bd_pertanian`) VALUES ("+"'"+id+"','"+nm_koperasi+", '"+email+", '"+password+", '"+alamat+", '"+luas_lahan+", '"+bd_pertanian+");";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            const response = h.response ({
                status: 'success',
                message: 'Data berhasil ditambahkan',
                data: {
                    userID: id,
                },
            })
            response.code(201);
        });
    });
};       

const getAllUsersHandler = (request, h) => {
    const {nm_koperasi, email, password, alamat, luas_lahan, bd_pertanian} = request.payload;

    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
    });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO `user` (`kd_koperasi`, `nm_koperasi`, `email`, `password`, `alamat`, `luas_lahan`, `bd_pertanian`) VALUES ("+"'"+id+"','"+nm_koperasi+", '"+email+", '"+password+", '"+alamat+", '"+luas_lahan+", '"+bd_pertanian+");";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            const response = h.response ({
                status: 'success',
                message: 'Data berhasil ditemukan',
                data: {
                    userID: id,
                },
            })
            response.code(200);
        });
    });
};      

const getUserByIdHandler = (request, h) => { const {id} = request.params; const user = user.filter((b) => b.id === id)[0];
    
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO `user` (`kd_koperasi`, `nm_koperasi`, `email`, `password`, `alamat`, `luas_lahan`, `bd_pertanian`) VALUES ("+"'"+id+"','"+nm_koperasi+", '"+email+", '"+password+", '"+alamat+", '"+luas_lahan+", '"+bd_pertanian+");";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        const response = h.response ({
            status: 'fail',
            message: 'Data tidak berhasil ditemukan',
            data: {
                userID: id,
            },
        })
        response.code(404);
    });
});
};      
const editUserByIdHandler = (request, h) => {const {id} = request.params;
const {nm_koperasi, email, password, alamat, luas_lahan, bd_pertanian, 
}= request.payload;
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO `user` (`kd_koperasi`, `nm_koperasi`, `email`, `password`, `alamat`, `luas_lahan`, `bd_pertanian`) VALUES ("+"'"+id+"','"+nm_koperasi+", '"+email+", '"+password+", '"+alamat+", '"+luas_lahan+", '"+bd_pertanian+");";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        const response = h.response ({
            status: 'fail',
            message: 'Data tidak berhasil ditemukan',
            data: {
                userID: id,
            },
        })
        response.code(404);
    });
});
}; 

module.exports = {
    addUserHandler,getAllUsersHandler,getUserByIdHandler,editUserByIdHandler,deleteUserByIdHandler,
};
