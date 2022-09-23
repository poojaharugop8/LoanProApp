const { resolve } = require("path/win32");
const AdminModel = require("./admin.model");
EventEmitter = require ('events');

exports.createAdmin = function (data) {

    return new Promise(function (resolve, reject) {
        console.log("before save to db", data)
        data.email = data.email.toLowerCase();

        var admindata = AdminModel(data)

        admindata.save().then(function (result) {
            console.log("res", result)
            resolve(result)
        }, function (error) {
            console.log("Error", error);
            if (error.code == 11000) {
                reject(error)
            }
            reject()
        });
    })
}

exports.findAdmin = function (data) {
    return new Promise(function (resolve, reject) {
        var queryObj = {
            email: data.email.toLowerCase(),
            password: data.password
        }
        AdminModel.findOne(queryObj).then(function (result) {
            console.log("Finding user from db", result)
            if (result) {
                resolve(result)
            }
            else {
                reject("invalid crede")
            }
        }).catch(function (error) {
            reject()

        })
    }

    )
}




