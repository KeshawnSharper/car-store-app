import React from "react";
// import "../styles/style-product.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class HistoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      car: this.props.data
    };
  }
  render() {
    // console.log(this.state.car);
    return (
      <div className=" col-10 mx-auto col-sm-6 col-md-3 product-item">
        <img className="card-img" src={this.state.car.img} alt="phoneImage" />
        <div className="card-body">
          <h5 className="card-title">{this.state.car.title}</h5>
          <p className="price">{"$" + this.state.car.price}</p>
          <p className="price">
            {this.state.car.street} {this.state.car.city} {this.state.car.state}
            {this.state.car.country}
          </p>
          <p className="price">{this.state.car.date_ordered}</p>
          <p className="price">
            {this.state.car.delivered ? "delivered" : "In Progress"}
          </p>
        </div>
      </div>
    );
  }
}
