import React, { Component } from "react";
import ShoeCart from "./ShoeCart/ShoeCart";
import ShoeDetail from "./ShoeDetail/ShoeDetail";
import ShoeList from "./ShoeList/ShoeList";
import Data from "../../asset/data/data.json";

export class Home extends Component {
  shoeList = Data.map((item) => item);
  state = { detailItem: {}, cartList: [] };

  viewDetail = (item) => {
    this.setState({ detailItem: item });
  };

  addToCart = (item) => {
    const cart = [...this.state.cartList];
    const cartItem = cart.find((i) => i.shoe.id === item.id);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      const newCartItem = { shoe: item, quantity: 1 };
      cart.push(newCartItem);
    }

    this.setState({ cartList: cart });
  };

  decreaseQuantity = (item) => {
    const cart = [...this.state.cartList];
    const cartItem = cart.find((i) => i.shoe.id === item.id);
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity -= 1;
    }

    this.setState({ cartList: cart });
  }

  increaseQuantity = (item) => {
    const cart = [...this.state.cartList];
    const cartItem = cart.find((i) => i.shoe.id === item.id);
    if (cartItem) {
      cartItem.quantity += 1;
    }

    this.setState({ cartList: cart });
  };

  removeShoe = (id) => {
    const cart = [...this.state.cartList];
    const index = cart.findIndex((i) => i.shoe.id === id);
    if (index !== -1) {
      cart.splice(index, 1);
    }

    this.setState({ cartList: cart });
  };

  checkOutCart = () => {
    this.setState({ cartList: [] });
  };

  render() {
    return (
      <div>
        <div className="d-flex justify-content-between ps-3 pe-3 mb-3">
          <h1>Shoe Shop</h1>
          <button
            className="btn btn-primary ps-3 pe-3"
            data-bs-toggle="modal"
            data-bs-target="#cartModal"
          >
            <i className="fa-solid fa-cart-shopping" />
          </button>
        </div>
        <ShoeCart
          cartList={this.state.cartList}
          decreaseQuantity={this.decreaseQuantity}
          increaseQuantity={this.increaseQuantity}
          removeShoe={this.removeShoe}
          checkOutCart={this.checkOutCart}
        />
        <ShoeList
          shoeList={this.shoeList}
          viewDetail={this.viewDetail}
          addToCart={this.addToCart}
        />
        <ShoeDetail detailItem={this.state.detailItem} />
      </div>
    );
  }
}

export default Home;
