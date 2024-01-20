import React from "react";
import "./SearchBar.scss";
import SearchIcon from "../../images/Searchicon.png";
import Adidas from "../../images/adidas.png";
import Card from "../../images/card.png";
import Person from "../../images/person.png";
import Hart from "../../images/hart.png";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="searchbar">
            <div className="serach-input">
              <img src={SearchIcon} alt="iconsearch" />
              <input type="text" placeholder="Search" />
            </div>
            <div className="logo">
              <img src={Adidas} alt="adidas logo" />
            </div>
            <div className="cards">
              <button className="cardBtn" onClick={this.props.onOpenDrawer}>
                <div className="cardIcon">
                  <img src={Card} alt="cardimg" />
                  <span>{this.props.count}</span>
                </div>
                <p>Cart</p>
              </button>
              <button className="Btn">
                <img src={Hart} alt="hart" />
                <p>Wishlist</p>
              </button>
              <button className="Btn">
                <img src={Person} alt="hart" />
                <p>Logout</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBar;
