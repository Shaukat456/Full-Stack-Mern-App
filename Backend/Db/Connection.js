const mongoose=require("mongoose")

// dotEnv.config({path :"./config.env"})

const DBp=process.env.DATABASE;

mongoose.connect(DBp,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("connected to DB")
    
}).catch((E)=>{
    console.log(E,"error")
})
