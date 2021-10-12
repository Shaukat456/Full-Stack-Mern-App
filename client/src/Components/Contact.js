import { useState } from "react";
import { useHistory } from "react-router";

function Contact() {

const history=useHistory()
  const [Visitor,setVisitor]=useState({
        name:"",email:"",password:"",contact:"",
    });

    let name,value;

    function HandleInputs(e){
        
      
      name=e.target.name;
      value=e.target.value
      
      setVisitor({...Visitor,[name]:value})
      


    


    }

    const  Submission =async(b)=>{
        b.preventDefault()

        const [name ,email,password,contact]=Visitor;
        console.log(name)

      const resp= await fetch('/register',{
         method:"POST",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify({ 

          name:name ,email:email,password:password,contact:contact
         })
         
       })
       const data=await resp.json()

       if(resp.status===422|| !data){
         window.alert("invalid Registration")
         console.log("invalid Registration")
       }else{
        window.alert("successfull Registration")
        console.log("successfull Registration")
       }
      history.push('/Home')
    }


    return (
        
        <>

<form>
  <div class="form-group ">
    <label htmlFor="staticEmail" class="col-sm-2 col-form-label">NAME</label>
    <div class="col-sm-10">
      <input type="text"   name='name'  class="form-control-plaintext" id="staticEmail" value={Visitor.name}   onChange={HandleInputs}  />
    </div>
  </div>
  <div class="form-group col">
    <label htmlFor="inputPassword" class="col-sm-2 col-form-label">EMAIL</label>
    <div class="col-sm-5">
      <input type="email" name='email'  class="form-control" id="inputPassword"  onChange={HandleInputs} value={Visitor.email}   placeholder="email" />
    </div>
    <label htmlFor="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-5">
      <input type="password"  name='password' class="form-control" id="inputPassword"  onChange={HandleInputs}  value={Visitor.password}  placeholder="Password" />
    </div>
    <label htmlFor="inputPassword" class="col-sm-2 col-form-label"> Contact</label>
    <div class="col-sm-5">
      <input type="password"  name='contact' class="form-control" id="inputPassword"  onChange={HandleInputs} value={Visitor.contact}  placeholder="Contact" />
    </div>
    <button type="submit" class="btn btn-info mx-auto my-5" onClick={Submission}  >Submit</button>

   
  </div>
</form>

    {/* <div className="container">

    </div>
       <input type="text"  value='Enter Name ' />
       <input type="text"  value='Enter  Email ' />
       <input type="text"  value='Enter Contact ' />
       <input type="text"  value=' Phone' /> */}
        </>


     );
}

export default Contact;