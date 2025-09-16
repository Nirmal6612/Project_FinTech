import { useNavigate } from "react-router-dom";
import "../../src/index.css";

function Navbar() {
    const navigate=useNavigate();
    
     const HandleLogin=()=>{
      navigate("/login");
    }
     
  return (
    <nav className="navbar">
      <div className="logo">FinTech</div>
      <div className="nav-right">
        <select className="lang-select">
          <option>EN</option>
          <option>FR</option>
          <option>DE</option>
        </select>
        <button className="login-btn" onClick={HandleLogin}>Log in</button>
        
      </div>
    </nav>
  );
}

export default Navbar;  
