import React from "react";
import "./Navbar.scss";
class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="navbar">
        <div className="navContainer">
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Unisex</li>
            <li>Kids</li>
            <li>Best Sellers</li>
            <li className="active"> Offers</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Navbar;
