const { response } = require('@hapi/hapi');
const { nanoid } = require('nanoid');
const conn = require("./mysql_connection")

const addUserHandler = async (request, h) => {
    const {
         nm_koperasi, email, password, alamat, luas_lahan, bd_pertanian
    } = request.payload;
    if (nm_koperasi === undefined){
        const response = h.response ({
            status: 'Fail',
            message: 'Silakan isi Nama Koperasi Anda',
        })
        response.code(401);
        return response;
    }

    if (email === undefined || email === "" || password ===undefined|| password === "" ){
        const response = h.response ({
            status: 'Fail',
            message: 'Silakan isi email dan password anda',
        })
        response.code(401);
        return response;
    }
    insAlamat = alamat;
    insluaslahan = luas_lahan;
    insbdpertanian = bd_pertanian;
    if (alamat ===undefined){
        insAlamat = "";
    }
    if (luas_lahan === undefined){
        insluaslahan = ""; 
    }

    if  (bd_pertanian === undefined){
        insbdpertanian = "";
    }

    const id = nanoid (8);
       
    var sql = "INSERT INTO `user_reg` (`kd_koperasi`, `nm_koperasi`, `email`, `password`, `alamat`, `luas_lahan`, `bd_pertanian`) VALUES (?, ?, ?, ?, ?, ? ,?);";
    let result= await conn.query(sql, [id, nm_koperasi, email, password, insAlamat, insluaslahan, insbdpertanian]);

    return await responseData(result,id, h);    
};       

async function responseData(result,id, h){
    if (result.affectedRows>0){
        return h.response ({
            status: 'success',
            message: 'Data berhasil ditambahkan',
            data: {
                kd_koperasi : id,
            },
        }).code(201);
    }else{
        return h.response ({
            status: 'gagal',
            message: 'Data gagal ditambahkan',
        }).code(401);
    }   
}


const checkLoginHandler = async function checkLogin (request, h){   
    const {
         email, password
    } = request.payload;

    var sql = "SELECT kd_koperasi FROM user_reg WHERE email = ? AND password = ?";
    let data = await conn.query(sql, [email, password]);
    await console.log(data[0]);
    return await returnData(data[0], h);
};       

function returnData(userID, h){
    if (userID === undefined){
        const response = h.response ({
            status: 'fail',
            message: 'Login Gagal. Silakan periksa kembali email dan password anda.',
        })
        response.code(201);
        return response;
    }else{
        const response = h.response ({
            status: 'success',
            message: 'Login Berhasil',
            data : {
                kd_koperasi : userID,
            }
        })
        response.code(201);
        return response;
    }
}


const editUserHandler = async (request, h) => {
    const {
         kd_koperasi, nm_koperasi, email, password, alamat, luas_lahan, bd_pertanian
    } = request.payload;
    
    if (kd_koperasi===undefined){
        const response = h.response ({
            status: 'Fail',
            message: 'Kode Koperasi tidak boleh kosong.',
        })
        response.code(401);
        return response;
    }

    if (nm_koperasi === undefined){
        const response = h.response ({
            status: 'Fail',
            message: 'Silakan isi Nama Koperasi Anda',
        })
        response.code(401);
        return response;
    }

    if (email === undefined || email === "" || password ===undefined|| password === "" ){
        const response = h.response ({
            status: 'Fail',
            message: 'Silakan isi email dan password anda',
        })
        response.code(401);
        return response;
    }
    insAlamat = alamat;
    insluaslahan = luas_lahan;
    insbdpertanian = bd_pertanian;
    if (alamat ===undefined){
        insAlamat = "";
    }
    if (luas_lahan === undefined){
        insluaslahan = ""; 
    }
    if  (bd_pertanian === undefined){
        insbdpertanian = "";
    }
       
    var sql = "UPDATE user_reg SET nm_koperasi=?, email=?, password=?, alamat=?, luas_lahan=?, bd_pertanian=? WHERE kd_koperasi=?;";
    let result= await conn.query(sql, [nm_koperasi, email, password, insAlamat, insluaslahan, insbdpertanian, kd_koperasi]);
    return await responseUpdateData(result, kd_koperasi, h);    
};       

async function responseUpdateData(result,kd_koperasi, h){
    if (result.affectedRows>0){
        return h.response ({
            status: 'success',
            message: 'Data berhasil diubah',
            data: {
                kd_koperasi : kd_koperasi,
            },
        }).code(201);
    }else{
        return h.response ({
            status: 'gagal',
            message: 'Data gagal diubah',
        }).code(401);
    }   
}

module.exports = {
    addUserHandler,
    checkLoginHandler,
    editUserHandler,
};
