import react from "react";
import usaFlag from "../images/USA-flag.ico";
import trust from "../images/desktop-shield.png";
import './Header.css'

function Header() {
  return (
    <div>
      <div className='desktop-view'>
        <img src={usaFlag} className='usa-flag' alt="USA Flag" />
        <h4>EN</h4>
        <div className='desktop-icons'>
          <img
            src={trust}
            className='desktop-shield-badge'
            alt="safety-badge"
          />
          <i className="fas fa-question-circle"/>
          <i className='fas fa-map-marker-alt' />
          <i className='fas fa-user'></i>
          <i className='fas fa-shopping-cart'>
            <h4 className='cart'>&nbsp;&nbsp;3</h4>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Header;
