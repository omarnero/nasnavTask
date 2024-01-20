import React from "react";
import "./Breadcrab.scss";
class Breadcrab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="breadcrab">
        <div className="container">
          <ul>
            <li>Men</li>
            <li>/</li>
            <li> Clothing</li>
            <li>/</li>
            <li> Tops</li>
            <li>/</li>
            <li> Adidas</li>
            <li>/</li>
            <li> Adidas Black T-Shirt</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Breadcrab;
