const express =require("express");
const app=express();
const mongoose=require("mongoose");
const dotEnv=require("dotenv")

const User=require("./Database Design/user");
const jwt=require("jsonwebtoken")

const Port=process.env.PORT;

app.use(express.json())

dotEnv.config({path :"./config.env"})
require("./Db/Connection")

// router file to make rout  easy
app.use(require("./router/auth"))


const MiddleWare=(req,res,next)=>{
    console.log("middle ware");
    next()
}

app.get("/", MiddleWare, (req,res)=>{
    res.send("hello  world")
})

app.listen(process.env.PORT,()=>{
    console.log('server is running on ' + process.env.PORT)
})