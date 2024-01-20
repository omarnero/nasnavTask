import React from "react";
import "./Similar.scss";

import AvatarOne from "../../images/avatar1.png";
import AvatarTwo from "../../images/avatar2.png";
import AvatarThree from "../../images/avatar3.png";
import AvatarFour from "../../images/avatar4.png";
import CardProduct from "../CardProduct/CardProduct";
class Similar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="similar">
        <div className="container">
          <h2 className="title">Similar Products</h2>
          <h3 className="subtitle">You may like these products also</h3>
          <div className="cards">
            <CardProduct image={AvatarOne} picked={true} discount="50" />
            <CardProduct
              image={AvatarTwo}
              picked={false}
              from="Uk"
              to="Egypt"
              in="10"
            />
            <CardProduct image={AvatarThree} picked={true} discount="30" />
            <CardProduct
              image={AvatarFour}
              picked={false}
              discount="70"
              from="Egypt"
              to="Egypt"
              in="2 Days"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Similar;
