const express =require("express");
const app=express();
const mongoose=require("mongoose");

const DB='mongodb+srv://Shaukat:31429860@cluster0.7tqxz.mongodb.net/MernStack?retryWrites=true&w=majority';


mongoose.connect(DB,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("connected to DB")
    
}).catch((E)=>{
    console.log(E,"error")
})



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