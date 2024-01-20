import React from "react";
import Topbar from "../components/Topbar/Topbar";
import SearchBar from "../components/SearchBar/SearchBar";
import Navbar from "../components/Navbar/Navbar";
import Breadcrab from "../components/Breadcrab/Breadcrab";
// import Product from "../components/Product/Product";
import Footer from "../components/Footer/Footer";
import Loading from "../components/Loading/Loading";
import Checkout from "../components/Checkout/Checkout";
import Similar from "../components/Similar/Similar";
const Product = React.lazy(() => import("../components/Product/Product"));
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.counter = 1;
    this.handleCloseDrawer = this.handleCloseDrawer.bind(this);
    this.handleOpenDrawer = this.handleOpenDrawer.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.handleAddToCard = this.handleAddToCard.bind(this);
    this.state = { drawer: false, count: 0, counter: 1 };
    this.price = 9.99;
    this.totalprice = 9.99;
  }
  incrementCount() {
    this.setState((currentState) => {
      return { counter: currentState.counter + 1 };
    });
  }
  decrementCount() {
    if (this.state.counter === 1) return;
    this.setState((currentState) => {
      return { counter: currentState.counter - 1 };
    });
  }
  componentWillUpdate(prevProps, prevState) {
    console.log("comming from will update", prevState.count);
    if (this.state.count !== prevState.count) {
      if (prevState.count === 0) return;
      this.totalprice = this.price * prevState.count;
    }
  }

  handleOpenDrawer() {
    this.setState((currentState) => {
      return { drawer: true };
    });
  }
  handleCloseDrawer() {
    this.setState((currentState) => {
      return { drawer: false };
    });
  }
  handleAddToCard() {
    if (this.state.count === 0) {
      this.setState((currentState) => {
        return { count: currentState.counter };
      });
    } else {
      this.setState((currentstate) => {
        return { count: currentstate.counter + currentstate.count };
      });
    }
  }
  render() {
    return (
      <>
        <Topbar />
        <SearchBar
          onOpenDrawer={this.handleOpenDrawer}
          count={this.state.count}
        />
        <Navbar />
        <Breadcrab />
        <React.Suspense fallback={<Loading />}>
          <Product
            price={this.price}
            count={this.state.counter}
            onAdd={this.incrementCount}
            onRemove={this.decrementCount}
            onpenDrawer={this.handleOpenDrawer}
            onAddtoCard={this.handleAddToCard}
          />
        </React.Suspense>
        <Similar />
        <Footer />
        <Checkout
          drawer={this.state.drawer}
          onCloseDrawer={this.handleCloseDrawer}
          count={this.state.count}
          price={this.price}
          lastPrice={this.totalprice}
        />
      </>
    );
  }
}
export default MainPage;
