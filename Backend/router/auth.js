const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt=require("jsonwebtoken")

const User = require("../Database Design/user");

router.get("/", (req, res) => {
  res.send("hello world from auth");
});

router.post("/register", (req, res) => {
  const { name, email, password, contact } = req.body;

  if (!name || !email || !password || !contact) {
    return res.send("please fill all the fields");
  }

  User.findOne({ email: email }).then((UserExists) => {
    if (UserExists) {
      return res.status(422).json({ error: "Email already exists" });
    }

    const user = new User({ name, email, password, contact });

    user
      .save()
      .then((u) => {
        //   console.log("user created")
        return [console.log(u), res.send(u)];
      })
      .catch((e) => {
        console.log(e);
      })
      .catch((er) => {
        console.log(er);
      });
  });
});


  
            // Login Route

// router.post("/signin", async (req, res) => {
//   // console.log(req.body)
//   try {
//     let  token;
//     const { email, password } = req.body;

//     // If empty or wrong
//     if (!email || !password) {
//       return res.status(400).json({ error: "LOGIN ERROR" });
//     }

//     const UserLogin = await User.findOne({ email: email });
//     console.log(UserLogin);



    
    // db pass, user password

//     if (UserLogin) {
//       const IsMatch = await bcrypt.compare(password, UserLogin.password);
//      token =await  UserLogin.genAuthToken();
//      console.log(token)
     
//       if (!IsMatch) {
//         res.json({ error: "Invlid Info" });
//       } else {
//         res.json({ message: "Login Done" });
//       }
//     } else {
//       res.json({ error: "Invlid Info" });
//     }
//   } catch (err) {
//     console.log("error");
//   }
// });


module.exports = router;
