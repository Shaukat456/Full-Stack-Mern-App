const express =require("express");
const app=express();


const MiddleWare=(req,res,next)=>{
    console.log("middle ware");
    next()
}

app.get("/d", MiddleWare, (req,res)=>{
    res.send("hello  world")
})




app.listen(80,()=>{
    console.log('server is running ')
})