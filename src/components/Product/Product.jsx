import React from "react";
import "./Product.scss";
import MainProduct from "../../images/mainpic.png";
import Convert from "../../images/360pic.png";
import ArrowLeft from "../../images/left Arrow.png";
import ArrowRight from "../../images/rightarrow.png";
import GroupOne from "../../images/group1.png";
import GroupTwo from "../../images/group2.png";
import GroupThree from "../../images/group3.png";
import GroupFour from "../../images/group4.png";
import Addias from "../../images/small_addidas.png";
import Star from "../../images/star.png";
import EmptyStar from "../../images/emptystar.png";
import Colorone from "../../images/colorone.png";
import Colortwo from "../../images/colortwo.png";
class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section>
        <div className="container">
          <div className="product">
            <aside className="lproduct">
              <div className="mainpic">
                <img src={MainProduct} alt="mainproduct" className="pic" />
                <img className="conv" src={Convert} alt="mainproduct" />
              </div>
              <div className="toggal">
                <button className="dir">
                  <img src={ArrowLeft} alt="leftarrow" />
                </button>
                <img src={GroupOne} alt="groupone" />
                <img src={GroupTwo} alt="groupone" />
                <img src={GroupThree} alt="groupone" />
                <img src={GroupFour} alt="groupone" />

                <button className="dir">
                  <img src={ArrowRight} alt="rightarrow" />
                </button>
              </div>
            </aside>
            <aside className="rproduct">
              <div className="price">
                <img alt="addidas" src={Addias} className="logo" />
                <p>
                  Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit.
                </p>
                <span>Men</span>
                <div className="rates">
                  <div className="stares">
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={EmptyStar} alt="Estar" />
                  </div>
                  <h2>4.9 of 5</h2>
                  <h3>22 Rates</h3>
                </div>
                <div className="prices">
                  <h2 className="fprice">{this.props.price} LE</h2>
                  <h5 className="lastprice">
                    {" "}
                    <s>10.99 LE</s>
                  </h5>
                  <span className="discount">30% Off</span>
                </div>
              </div>
              <div className="sizes-layout">
                <h4>Size</h4>
                <div className="sizes">
                  <div>Small</div>
                  <div>Medium</div>
                  <div className="acticve">Large</div>
                  <div>X Large</div>
                  <div>XX Large</div>
                </div>
              </div>
              <div className="colors">
                <h4>Color</h4>
                <div className="colors_layout">
                  <img className="active" src={Colorone} alt="color_one" />
                  <img src={Colortwo} alt="color_two" />
                </div>
              </div>
              <div className="quantity">
                <h4>Quantity</h4>
                <div className="counter">
                  <button onClick={this.props.onRemove}>-</button>
                  <p>{this.props.count}</p>
                  <button onClick={this.props.onAdd}>+</button>
                </div>
                <div className="btns">
                  <button onClick={this.props.onAddtoCard} className="add">
                    Add To Cart
                  </button>
                  <button className="store">Pickup From Store</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
