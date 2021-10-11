const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confpassword: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            },
        }
    ]


})


userSchema.pre("save", async function (next) {
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

// userSchema.methods.genAuthToken() = async function () {
//     try {
//         let token = jwt.sign({ _id: this._id }, "MynAmeiz");
//         this.tokens = await this.tokens.concat({ token})
//         await this.save()
//         return token;
//     } catch (err) {
//         console.log(err)
//     }
// }


const User = mongoose.model("USER", userSchema)

module.exports = User;
