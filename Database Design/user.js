const mongoose =require("mongoose");
const bcrypt= require("bcryptjs")


const UserSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confpassword:{
        type:String,
        required:true,
    }
    

})


UserSchema.pre("save", async function(next) {
    try {
        if (!this.isModified("password")) {
          return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (err) {
        return next(err);
   }
  });

//('preMethod')
// if(this.isModified("password")){


// this.password= await bcrypt.hash(this.password, 12)
// this.confpassword= await bcrypt.hash(this.confpassword, 12)
// }


// next()
// res.send("pre method called")
// })

const User=mongoose.model("USER",  UserSchema )

module.exports=User;
