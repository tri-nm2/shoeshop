import React, { Component } from "react";

export class ShoeCart extends Component {
  btnClose = React.createRef();

  renderCart() {
    const tag = this.props.cartList.map((item) => {
      return (
        <tr key={item.shoe.id}>
          <td>{item.shoe.id}</td>
          <td>
            <img
              style={{ width: 50, height: 50 }}
              src={item.shoe.image}
              alt="error"
            ></img>
          </td>
          <td>{item.shoe.name}</td>
          <td>
            <button
              className="btn btn-light"
              onClick={() => {
                this.props.decreaseQuantity(item.shoe);
              }}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="btn btn-light"
              onClick={() => {
                this.props.increaseQuantity(item.shoe);
              }}
            >
              +
            </button>
          </td>
          <td>{item.shoe.price}</td>
          <td>{item.shoe.price * item.quantity}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.removeShoe(item.shoe.id);
              }}
            >
              <i className="fa-solid fa-trash" />
            </button>
          </td>
        </tr>
      );
    });

    return tag;
  }
  render() {
    return (
      <div className="modal fade" id="cartModal" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Your Cart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={this.btnClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  this.props.checkOutCart();
                  this.btnClose.current.click();
                }}
              >
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoeCart;
