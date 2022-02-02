import react from "react";
import usaFlag from "./USA-flag.ico";
import trust from "./trust.png";
import './AboutUs.css'

function AboutUs() {
  return (
    <div className='about-us'>
      <div className="mobile-menu">
        <div className="mobile-links"></div>
      </div>

      <div class="menu-bottom">
        <div class="menu-bottom-items">
          <div className="mobile-help">
        <h4> <i class="fas fa-question-circle"></i>Help &nbsp;&nbsp;  <i class="fas fa-chevron-right"></i></h4>
        </div>
        </div>
        <div class="menu-bottom-items">
          <i class="fas fa-map-marker-alt"></i>
          <h4>Where to Buy/Rent</h4>
        </div>
        <div class="menu-bottom-items">
          <img className="safety-badge" src={trust} alt="safety-badge" />
          <h4>&nbsp;Safety</h4>
        </div>
        <div class="menu-bottom-items">
          <img class="usa-flag" src={usaFlag} alt="USA Flag" />
          <h4>EN</h4>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
