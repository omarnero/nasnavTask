import React from "react";
import "./Topbar.scss";
import BurgerMenu from "../../images/burgerMenu.png";
import Logo from "../../images/logo.png";
import LeftArrow from "../../images/letfArrow.png";
import RightArrow from "../../images/arrowright.png";
import Contactus from "../../images/contactus.png";
import Track from "../../images/track.png";
import Location from "../../images/location.png";
class Topbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="topbar">
        <div className="container">
          <div className="topbar_parent">
            <div className="logo-area">
              <img src={BurgerMenu} alt="burgermenu" className="burgerMenu" />
              <img src={Logo} alt="logo" className="logo" />
            </div>
            <div className="offer">
              <img src={LeftArrow} alt="leftArrow" />
              <p>
                Valentine’s Day Offers! Buy Two Get One Free{" "}
                <span>Shop Now</span>
              </p>
              <img src={RightArrow} alt="rightArrow" />
            </div>
            <div className="actions">
              <div className="actions">
                <img src={Contactus} alt="action icon" />
                <p>Contact Us</p>
              </div>
              <div className="actions">
                <img src={Track} alt="action icon" />
                <p>Track Order</p>
              </div>
              <div className="actions">
                <img src={Location} alt="action name" />
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Topbar;
