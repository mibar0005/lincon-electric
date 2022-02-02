import * as React from "react";
import AboutUs from "../AboutUs";
import logo from "../logo.png";
import "./SolutionsMobile.css";

function SolutionsMobile() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      setSubMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <div className="solutions-mobile">
      <nav className="navbar-mobile">
        <i
          onClick={closeMenu}
          className={menuOpen ? "fas fa-times" : "fas fa-bars"}
        />

        <img src={logo} alt="logo-mobile" className="logo-mobile" />

        <div className="mobile-icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-user"></i>
          <i className="fas fa-shopping-cart">&nbsp;&nbsp;3</i>
        </div>
      </nav>
      {menuOpen && !subMenuOpen && (
        <ul className={menuOpen && "hide-navbar"}>
          <div className="mobile-main-menu">
            <li className="menu-mobile">
              <h4 className="sub-menu-header">
                Menu{" "}
                <strong onClick={closeMenu} className="times">
                  X
                </strong>{" "}
              </h4>
            </li>
            <div className="mobile-menu-items">
              <li onClick={() => setSubMenuOpen(true)}>
                SOLUTIONS <i className="fas fa-chevron-right"></i>
              </li>
              <li>
                PRODUCTS <i className="fas fa-chevron-right"></i>
              </li>
              <li>
                AUTOMATION <i className="fas fa-chevron-right"></i>
              </li>
              <li>
                EDUCATION <i className="fas fa-chevron-right"></i>
              </li>
              <li>
                RESOURCES <i className="fas fa-chevron-right"></i>
              </li>
            </div>
          </div>
          <AboutUs />
        </ul>
      )}
      {menuOpen && subMenuOpen && (
        <ul className={menuOpen && "hide-navbar"}>
            <div className="mobile-sub-menu">
          <li className="menu-mobile">
            <h4 className="solutions-sub-menu">
             Menu
    
              <strong onClick={closeMenu} className="times-submenu">
                X
              </strong>
            </h4>
          </li>
          <li className="mobile-back" onClick={() => setSubMenuOpen(false)}>
            <h4>
             
              <i className="fas fa-chevron-left" />&nbsp;&nbsp;GO BACK{" "}
            </h4>
          </li>
          <div className='solutions-by-menu'>
          <li>
            <h4>
              SOLUTIONS BY INDUSTRY <i className="fas fa-chevron-right"></i>
            </h4>
          </li>
          <li>
            <h4>
              SOLUTIONS BY PROCESS <i className="fas fa-chevron-right"></i>
            </h4>
          </li>
          <li>
            <h4>
              SOFTWARE SOLUTIONS <i className="fas fa-chevron-right"></i>
            </h4>
          </li>
          <li>
            <h4>
              SERVICES<i className="fas fa-chevron-right"></i>
            </h4>
          </li>
          </div>
          </div>
        </ul>
      )}
      <div className="content-mobile"></div>
      <div className="mobile-background"></div>
    </div>
  );
}

export default SolutionsMobile;
