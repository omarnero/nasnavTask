import React from "react";
import Icon360 from "../../images/360pic.png";
import AvatarOne from "../../images/avatar1.png";
import Adidas from "../../images/adidas.png";
import Star from "../../images/star.png";
import EStar from "../../images/emptystar.png";

class CardProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <div className="top__card">
          <img className="img-product" src={this.props.image} alt="avatar" />
          <div className="img-360">
            <img src={Icon360} alt="icon360" />
          </div>
        </div>
        <div className="card_content">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <div className="peice_layout">
            <div>
              <h3>9,999 LE</h3>
              {this.props.discount && (
                <div className="last_price">
                  <s>9,999 LE</s>
                  <span> {this.props.discount} %</span>
                </div>
              )}
            </div>
            <img src={Adidas} alt="adidas" />
          </div>
        </div>
        <div className="rating">
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={EStar} alt="star" />
          <span>4.2 of 5</span>
        </div>
        {this.props.picked && (
          <div className="pickup">
            <span>Pickup From:</span>
            <p>Genena Mall</p>
          </div>
        )}
        {!this.props.picked && (
          <div className="fromTo">
            <div className="pickup">
              <span>From:</span>
              <p>{this.props.from}</p>
            </div>
            <div className="pickup">
              <span>To:</span>
              <p>{this.props.to}</p>
            </div>
            <div className="pickup">
              <span>in:</span>
              <p>{this.props.in}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CardProduct;
