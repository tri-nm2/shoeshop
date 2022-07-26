import React, { Component } from "react";

export class ShoeDetail extends Component {
  render() {
    return (
      <div className="modal fade" id="detailModal" tabIndex={-1}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Shoe Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-5">
                  <img className="img-fluid" src={this.props.detailItem.image} alt="error"></img>
                </div>
                <div className="col-7">
                  <h5>{this.props.detailItem.name}</h5>
                  <h5>{this.props.detailItem.price} $</h5>
                  <h5>{this.props.detailItem.description}</h5>
                  <h5>Store Quantity: {this.props.detailItem.quantity}</h5>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoeDetail;
