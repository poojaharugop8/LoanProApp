const Express = require("express"); 
const router = Express.Router();
const UserController = require("./user.controller")
const jwt = require('jsonwebtoken');
const { response } = require("express");

router.post("/register", UserController.register)
router.post("/login", UserController.login)

module.exports = router

