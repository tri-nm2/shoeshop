import React, { Component } from "react";
import ShoeItem from "./ShoeItem/ShoeItem";

export class ShoeList extends Component {
  renderItem() {
    const tag = this.props.shoeList.map((item) => {
      return (
        <div key={item.id} className="col-3 mb-3">
          <ShoeItem
            shoe={item}
            viewDetail={this.props.viewDetail}
            addToCart={this.props.addToCart}
          />
        </div>
      );
    });

    return tag;
  }

  renderTest() {}
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderItem()}</div>
      </div>
    );
  }
}

export default ShoeList;
