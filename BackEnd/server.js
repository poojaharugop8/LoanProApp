const Express = require('express');
const path = require("path");
const cors = require("cors")
const fs = require("fs")
const mongoose = require("mongoose")
const dburlserver = "mongodb+srv://dhanupandey:test12345@cluster0.s2usivc.mongodb.net/?retryWrites=true&w=majority"
const dburl = "mongodb://localhost:27017/brilliodb5"
// new way to import express
// import Express from "express";

const server = Express();
const cosrsOption = {
    exposedHeaders : 'Auth'
};
server.use(cors(cosrsOption))

//server.use(Express.static(path.resolve(__dirname, "./build")))
server.use(Express.json());
server.use('/user', require("./user"))
server.use('/admin', require("./admin"))



// server.get("/", function(req,res){

//     res.sendFile(path.resolve(__dirname,"./build/index.html"))
  
//   })

server.listen(5000, ()=>{
    mongoose.connect(dburl, function(error, client){
        if(error)
        {
            console.log("err", error)
        }
        else{
            console.log("connected")
        }
    })
    console.log("I am connected");
});

