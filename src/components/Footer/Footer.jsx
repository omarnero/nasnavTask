import React from "react";
import "./Footer.scss";
import FooterLogo from "../../images/footerLogo.png";
import Facebook from "../../images/facebook.png";
import Twitter from "../../images/twitter.png";
import Instagram from "../../images/instgram.png";
import Linkedin from "../../images/linkedin.png";
import Nasnav from "../../images/nasnav.png";
import Visa from "../../images/visa.png";
import Master from "../../images/master.png";
import Cashon from "../../images/cashon.png";
import Subscribe from "../../images/subcribe.png";
class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer>
        <div className="container">
          <div className="yes_footer">
            <div className="yes_desc">
              <img src={FooterLogo} alt="footerlogo" />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed
              </p>
              <p>
                dia m nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              </p>
            </div>
            <div className="yes_contact">
              <h3>Subscribe to our newsletter</h3>
              <div className="subscribe">
                <input type="text" placeholder="Enter Your Mail" />
                <button className="btn_subscribe">
                  <p>Subscribe</p>
                  <img src={Subscribe} alt="subscribeicon" />
                </button>
              </div>
              <div className="social_layout">
                <div className="contact">
                  <p>About Us</p>
                  <p>Contact Us</p>
                  <p>Track Order</p>
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                  <p>Sell With Us</p>
                  <p>Shipping And Returns</p>
                </div>
                <div className="social">
                  <div className="single__social">
                    <img src={Facebook} alt="social" />
                    <p>/YESHTERY</p>
                  </div>
                  <div className="single__social">
                    <img src={Linkedin} alt="social" />
                    <p>/YESHTERY</p>
                  </div>
                  <div className="single__social">
                    <img src={Instagram} alt="social" />
                    <p>/YESHTERY</p>
                  </div>
                  <div className="single__social">
                    <img src={Twitter} alt="social" />
                    <p>/YESHTERY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <p>© 2021 yeshtery, all rights reserved.</p>
            <div className="payments">
              <img className="cash" src={Cashon} alt="cash" />
              <img src={Visa} alt="visa" />
              <img src={Master} alt="master" />
            </div>
            <div className="power">
              <p>Powered By</p>
              <img src={Nasnav} alt="nas" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
