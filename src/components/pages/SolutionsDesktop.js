import * as React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png';
import './SolutionsDesktop.css';
import Dropdown from "../Dropdown";

function SolutionsDesktop() {
  const [click, setClick] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
    setDropdown(true);
  };



  const onMouseEnter = () => {
    if (window.innerWidth < 800) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 800) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };



  return (
    <>
      <div className="desktop">
        <nav>
          <div className="navbar-desktop">
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
            </div>
            <img src={logo} alt="logo" className="logo-desktop" />
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item" 
              onClick={() => setDropdown((x) => !x)}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                >
                <Link to ="/solutions"
                  className="nav-links"
                >
                  <h4 className="solutions-desktop">SOLUTIONS</h4> 
                </Link>
                {dropdown && <Dropdown/>}
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <h4 className="products-desktop">PRODUCTS</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/automation"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <h4 className="automation-desktop">AUTOMATION</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/education"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <h4 className="education-desktop">EDUCATION</h4>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/resource"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                <h4 className="resources-desktop">RESOURCES</h4>
                </Link>
              </li>
              </ul>
              <h4 className="search-desktop"> Search&nbsp;&nbsp;<i className="fas fa-search"></i></h4>
          </div>
        </nav>

        <div className='content'></div>
      </div>
    </>
  );
}

export default SolutionsDesktop;
