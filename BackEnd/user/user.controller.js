const userService = require("./user.service")
const jwt = require('jsonwebtoken');

const UserModel = require("./user.model");

exports.register = function (req, res) {

    userService.createUser(req.body).then(function (result) {
        var payload = {
            email: req.body.email.toLowerCase()
        }
        // var token = jwt.sign(payload, 'shhhhh')
        // var url = 'http://localhost:5050/user/verifyUser/?q=' + token

        //mailer.mail(req.body.email, url)
        res.send({

            message: "created user"
        })
    }, function (error) {
        if (error) {
            console.log("err", error)
            res.status(409).send({
                message: "user exists"
            })
        }
        else {
            res.status(500).send()
        }

    })
}

exports.login = function (req, res) {
    userService.findUser(req.body).then(function (result) {

        var payload = {
            email: req.body.email.toLowerCase()
        }
        var token = jwt.sign(payload, 'shhhhh');
        console.log(token);
        res.setHeader("Auth", token);
        //send otp

        res.send({
            msg: "succ",
            response: result
        })
        
    }, function (error) {
        if (error) {
            res.status(500).send({
                msg: "invalid"
            })
        }
        else {
            res.status(500).send()
        }
    })
}