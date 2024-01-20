import { Drawer } from "@mui/material";
import React from "react";
import Clsoe from "../../images/close.png";
import MainProduct from "../../images/mainpic.png";
import "./Checkout.scss";
class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Drawer
        anchor="right"
        open={this.props.drawer}
        onClose={this.props.onCloseDrawer}
      >
        {this.props.count === 0 && <p> no item selected </p>}
        {this.props.count > 0 && (
          <div className="checkout">
            <div className="close" onClick={this.props.onCloseDrawer}>
              <img src={Clsoe} alt="close" />
            </div>
            <div className="title">
              <h3>My Cart</h3>
            </div>
            <h4 className="subtitle">Cart Summary</h4>
            <div className="checkout-card">
              <img src={MainProduct} alt="mainproduct" />
              <div className="checkout-detail">
                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit.</p>
                <span>Quantity: {this.props.count}</span>
                <div className="checkout-price">
                  <h5>
                    {this.props.price} <span>LE</span>
                  </h5>
                  <button className="btn-remove">Remove</button>
                </div>
              </div>
            </div>
            <h5 className="totalprice">Total: {this.props.lastPrice} LE</h5>
            <div className="checkout-action">
              <button className="btn-primary">Review Cart</button>
              <button className="btn-secondary">Complete Checkout</button>
            </div>
          </div>
        )}
      </Drawer>
    );
  }
}

export default Checkout;
