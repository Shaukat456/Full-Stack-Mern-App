const express =require("express")

const router=express.Router();

const User =require("../Database Design/user")

router.get("/",(req,res)=>{
    res.send("hello world from auth")
    
})
router.post("/register",(req,res)=>{
   
    const {name ,email,password,confpassword}=req.body
    
    
if( !name ||  !email  || !password   ||  !confpassword         ){
    return res.send("please fill all the fields")
}
    
    
    User.findOne({email:email}).then((UserExists)=>{
     if(UserExists){
         return res.status(422).json({error:"Email already exists"})
     }

     const user=new User({ name ,email,password,confpassword  })
      user.save().then(()=>{
          console.log("user created")
          return res.send("created")
      }).catch((e)=>{
          console.log(e)
      }).catch((er)=>{
          console.log(er)
      })

    })



})



module.exports=router;