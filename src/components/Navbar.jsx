import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Navbar.css";
import logo from "../assets/images/next.png";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

// If you installed Bootstrap via npm, you can uncomment this line.
// Otherwise, the code below will fall back to window.bootstrap (CDN case).
// import { Offcanvas } from "bootstrap";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop hover menu
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile toggle

  // theme from context
  const { theme, toggleTheme } = useContext(ThemeContext);
  // (optional) user context, not directly used here, but kept since you had it
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
    { to: "#", icon: "bi bi-journal-text", label: "Data Analytics & Management" }, // fixed the '$'
    { to: "/ourservice/payroll", icon: "bi bi-rocket-takeoff", label: "Payroll Service Malaysia" },
  ];

  // --- Offcanvas helpers (works with npm install OR CDN bootstrap) ---
  const getOffcanvasInstance = () => {
    const el = document.getElementById("offcanvasNavbar");
    if (!el) return null;

    // Prefer module import if available
    // const inst = Offcanvas?.getInstance?.(el) || new Offcanvas(el);

    // Fallback to window.bootstrap if using CDN
    const bs = (window).bootstrap;
    if (bs?.Offcanvas) {
      return bs.Offcanvas.getInstance(el) || new bs.Offcanvas(el);
    }

    // If you imported { Offcanvas } from 'bootstrap', uncomment this:
    // return Offcanvas.getInstance(el) || new Offcanvas(el);

    return null;
  };

  const closeOffcanvas = () => {
    const inst = getOffcanvasInstance();
    if (inst) inst.hide();
  };

  // Navigate AFTER closing offcanvas (prevents “stuck overlay”)
  const go = (to) => (e) => {
    e.preventDefault();
    closeOffcanvas();
    navigate(to);
  };

  // Render items for DESKTOP dropdown (regular <Link>)
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

  // Render items for MOBILE offcanvas (buttons that call go())
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
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top navbar-scroll ${isScrolled ? "scrolled" : ""}`}
      id="nav-scroll"
    >
      <div className="container-fluid">

        {/* Brand */}
        <Link className="navbar-brand" to="/">
          <img src={logo} className="img-fluid" alt="logo" width="250" />
        </Link>

        {/* Mobile toggler → offcanvas */}
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

        {/* DESKTOP NAV */}
        <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">About Eximius</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/industry">Industry</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/career">Career</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>

            {/* Desktop mega dropdown (hover) */}
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

              <ul
                className={`dropdown-menu bigmenu ${dropdownOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                {renderServiceLinksDesktop()}
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

        {/* MOBILE OFFCANVAS */}
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

              {/* Mobile Services (tap to expand) */}
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

                {/* Use position-static so it renders naturally in the offcanvas */}
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
