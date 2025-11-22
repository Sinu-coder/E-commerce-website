import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import logo from "../assets/images/next.png";
import { UserContext } from "../context/UserContext"; 
import { ThemeContext } from "../context/ThemeContext";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [user, setUser] = useState(UserContext)
  const {theme,toggleTheme} = useContext(ThemeContext)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin =()=>{
    setUser({name:"Rabinarayan",loggedIn:true})
  }

  const handleLogout=()=>{
    setUser({name:"Guest",loggedIn:false})
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top navbar-scroll ${isScrolled ? "scrolled" : ""}`} id="nav-scroll">
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">
          <img src={logo} className="img-fluid" alt="logo" width="250" />
        </Link>

        
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">About Eximius</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/industry">Industry</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/career">Career</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>

            
            <li className="nav-item dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
  <Link className="nav-link dropdown-toggle" to="/ourservice" id="navbarDropdown" role="button" aria-expanded={dropdownOpen ? "true" : "false"}>
   Our Service
</Link>

  <ul
    className={`dropdown-menu bigmenu ${dropdownOpen ? "show" : ""}`}
    aria-labelledby="navbarDropdown"
  >
    <div className="dropdown-grid">
      <li>
        <Link className="dropdown-item" to="/ourservice/finance-accounting">
          <i className="bi bi-bar-chart-line"></i>Finance & Accounting Service
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/ourservice/customer-experience">
          <i className="bi bi-gear"></i>Customer Experience
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="#">
          <i className="bi bi-currency-dollar"></i>Supply Chain Management
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="#">
          <i className="bi bi-gear"></i>Human Resources Outsourcing
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="#">
          <i className="bi bi-journal-text"></i>Data Analytics $ Management
        </Link>
      </li>
      <li>
        <Link className="dropdown-item" to="/ourservice/payroll">
          <i className="bi bi-rocket-takeoff"></i>Payroll Service Malaysia
        </Link>
      </li>
    </div>
  </ul>
</li>
   </ul>

          
          <form className="d-flex ms-3">
            <Link to="/contact" className="btn-style-one text-white text-decoration-none">Contact Us</Link>
          </form>
          <button className="btn btn-warning ms-3" onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>

          
        </div>

        
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item"><Link className="nav-link" to="/">About Eximius</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/industry">Industry</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/career">Career</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>

              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/ourservice"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault(); 
                    setDropdownOpen(!dropdownOpen);
                  }}
                  aria-expanded={dropdownOpen ? "true" : "false"}
                >
                  Our Service
                </Link>
                <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                  <li><Link className="dropdown-item" to="/ourservice/action">Action</Link></li>
                  <li><Link className="dropdown-item" to="/ourservice/another-action">Another Action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/ourservice/extra">Something else here</Link></li>
                </ul>
              </li>
            </ul>

            <form className="d-flex mt-3">
              <Link to="/contact" className="btn-style-one text-white text-decoration-none w-100 text-center">Contact Us</Link>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
