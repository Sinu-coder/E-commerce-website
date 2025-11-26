import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Navbar.css";
import logo from "../assets/images/next.png";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); 

  
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const userCtx = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // One source of truth for service items
  const serviceItems = [
    { to: "/ourservice/finance-accounting", icon: "bi bi-bar-chart-line", label: "Finance & Accounting Service" },
    { to: "/ourservice/customer-experience", icon: "bi bi-gear", label: "Customer Experience" },
    { to: "#", icon: "bi bi-currency-dollar", label: "Supply Chain Management" },
    { to: "#", icon: "bi bi-gear", label: "Human Resources Outsourcing" },
    { to: "#", icon: "bi bi-journal-text", label: "Data Analytics & Management" }, 
    { to: "/ourservice/payroll", icon: "bi bi-rocket-takeoff", label: "Payroll Service Malaysia" },
  ];

 
  const getOffcanvasInstance = () => {
    const el = document.getElementById("offcanvasNavbar");
    if (!el) return null;

    
    const bs = (window).bootstrap;
    if (bs?.Offcanvas) {
      return bs.Offcanvas.getInstance(el) || new bs.Offcanvas(el);
    }

    

    return null;
  };
  

  const closeOffcanvas = () => {
    const inst = getOffcanvasInstance();
    if (inst) inst.hide();
  };

 
  const go = (to) => (e) => {
    e.preventDefault();
    closeOffcanvas();
    navigate(to);
  };

  
  const renderServiceLinksDesktop = () => (
    <div className="dropdown-grid">
      {serviceItems.map((item) => (
        <li key={item.label}>
          <Link className="dropdown-item" to={item.to}>
            <i className={item.icon}></i>{item.label}
          </Link>
        </li>
      ))}
    </div>
  );

  
  const renderServiceButtonsMobile = () => (
    <div className="dropdown-grid">
      {serviceItems.map((item) => (
        <li key={item.label}>
          <button
            type="button"
            className="dropdown-item text-start"
            onClick={go(item.to)}
          >
            <i className={item.icon}></i>{item.label}
          </button>
        </li>
      ))}
    </div>
  );

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top navbar-scroll ${isScrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">

       
        <Link className="navbar-brand" to="/">
          <img src={logo} className=" img-fl" alt="logo" width="250" />
        </Link>

       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse d-none d-lg-flex  top-pad" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">About Eximius</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/industry">Industry</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/career">Career</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>

            
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                className="nav-link dropdown-toggle"
                to="/ourservice"
                id="navbarDropdown"
                role="button"
                aria-expanded={dropdownOpen ? "true" : "false"}
              >
                Our Service
              </Link>

              <ul className={`dropdown-menu bigmenu ${dropdownOpen ? "show" : ""}`}>
                {renderServiceLinksDesktop()}
              </ul>
            </li>
          </ul>

          <form className="d-flex ms-3">
            <Link to="/contact" className="btn-style-one text-white text-decoration-none">Contact Us</Link>
          </form>

          <div className="theme-toggle ms-3">
  <input
    type="checkbox"
    id="toggle"
    checked={theme === "dark"}
    onChange={toggleTheme}
  />
  <label htmlFor="toggle"></label>
</div>


        </div>

        
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={go("/")}>About Eximius</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/industry" onClick={go("/industry")}>Industry</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/career" onClick={go("/career")}>Career</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog" onClick={go("/blog")}>Blog</Link>
              </li>

              
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link dropdown-toggle w-100 text-start btn btn-link"
                  style={{ textDecoration: "none" }}
                  onClick={() => setMobileServicesOpen(v => !v)}
                  aria-expanded={mobileServicesOpen ? "true" : "false"}
                >
                  Our Service
                </button>

                
                 <ul className={`dropdown-menu show position-static w-100 border-0 p-0 ${mobileServicesOpen ? "" : "d-none"}`}>
                  {renderServiceButtonsMobile()}
                </ul>
              </li>
            </ul>

            <form className="d-flex mt-3">
              <Link
                to="/contact"
                className="btn-style-one text-white text-decoration-none w-100 text-center"
                onClick={go("/contact")}
              >
                Contact Us
              </Link>
            </form>
          </div>
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
