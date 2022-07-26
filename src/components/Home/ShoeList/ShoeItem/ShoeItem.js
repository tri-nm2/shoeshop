import React, { Component } from "react";

export class ShoeItem extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.shoe.image} alt="error"></img>
        <div className="card-body">
          <h5 className="card-text">{this.props.shoe.name}</h5>
          <h5 className="card-text">{this.props.shoe.price} $</h5>
          <button
            className="btn btn-info me-2"
            data-bs-toggle="modal"
            data-bs-target="#detailModal"
            onClick={() => {
              this.props.viewDetail(this.props.shoe);
            }}
          >
            Detail
          </button>
          <button
            className="btn btn-dark"
            onClick={() => {
              this.props.addToCart(this.props.shoe);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default ShoeItem;
