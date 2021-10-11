import 'bootstrap/dist/css/bootstrap.css';

function NavBAR() {
    return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light "  style={{backgroundColor: '#e3f2fd'}}>
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <a href="" className="navbar-brand" > SHAWKODE </a>
    <button className="navbar-toggler   collapse.navbar-collapse " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse    " id="navbarNavDropdown">


      <ul className="navbar-nav    mx-auto">


        <li className="nav-item">

          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        
         
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        
         
        <li className="nav-item">
          <a className="nav-link" href="#">Registration</a>
        </li>
        
         
      </ul>
    </div>
  </div>
</nav>

</>
    
   
    );
  }
  
  
  
  
  
  
  
  export default NavBAR;
  