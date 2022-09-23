const Express = require("express"); 
const router = Express.Router();
const AdminController = require("./admin.controller")
const jwt = require('jsonwebtoken');
const { response } = require("express");

router.post("/register", AdminController.register)
router.post("/login", AdminController.login)

module.exports = router
