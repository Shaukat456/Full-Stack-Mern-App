const express =require("express")

const router=express.Router();

const User =require("../Database Design/user")

router.get("/",(req,res)=>{
    res.send("hello world from auth")
    
})



router.post("/register", (req,res)=>{
   
    const {name ,email,password,confpassword}=req.body
    
    
if( !name ||  !email  || !password   ||  !confpassword         ){
    return res.send("please fill all the fields")
}


    
    
   User.findOne({email:email}).then((UserExists)=>{
     if(UserExists){
         return res.status(422).json({error:"Email already exists"})
     }

     const user=new User({ name ,email,password,confpassword  })
      user.save().then((u)=>{
          //   console.log("user created")
          return [console.log(u),res.send(u)]
          
      }).catch((e)=>{
          console.log(e)
      }).catch((er)=>{
          console.log(er)
      })

    })



})


// Login Route

router.post("/signin",async(req,res)=>{
    // console.log(req.body)
try{
    const {email,password}=req.body;

    if(!email || !password ){
        return res.status(400).json({error:"LOGIN ERROR"})
        
    }

    const UserLogin= await User.findOne({email:email});
    console.log(UserLogin)

}
catch(err){
    console.log('error')
}

})

module.exports=router;