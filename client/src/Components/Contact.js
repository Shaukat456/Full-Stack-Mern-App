import { useState } from "react";

function Contact() {
    const [Visitor,setVisitor]=useState({
        name:"",email:"",password:"",contact:"",
    });

    function HandleInputs(e){
        setVisitor(e.target.value)
        console.log(e.target.value)
    }
    function Submission(b){
        b.preventDefault()
    }


    return (
        
        <>

<form>
  <div class="form-group ">
    <label for="staticEmail" class="col-sm-2 col-form-label">NAME</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={Visitor.name}   onChange={HandleInputs}  />
    </div>
  </div>
  <div class="form-group col">
    <label for="inputPassword" class="col-sm-2 col-form-label">EMAIL</label>
    <div class="col-sm-5">
      <input type="email" class="form-control" id="inputPassword"  onChange={HandleInputs} value={Visitor.email}   placeholder="email" />
    </div>
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-5">
      <input type="password" class="form-control" id="inputPassword"  onChange={HandleInputs}  value={Visitor.password}  placeholder="Password" />
    </div>
    <label for="inputPassword" class="col-sm-2 col-form-label"> Contact</label>
    <div class="col-sm-5">
      <input type="password" class="form-control" id="inputPassword"  onChange={HandleInputs} value={Visitor.contact}  placeholder="Contact" />
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