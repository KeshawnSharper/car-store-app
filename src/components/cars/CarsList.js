import React from "react";
import Title from "../title/Title";
// import "../styles/style-product.css";
import Car from "./Car";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    cars: state.cars
  };
};
class CarsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: this.props.cars.filter(
        (car) => car.brand === this.props.match.params.brand
      )
    };
  }
  handleGetDetail = (productId) => {
    const newDetail = this.state.cars.find((c) => c.id === productId);
    this.setState({ detail: newDetail });
  };
  render() {
    return (
      <div className="productsList">
        <Title name="our" title="products" />
        <div className="row mt-5">
          {this.state.cars.map((product) => (
            <Car
              key={product.id}
              data={product}
              getDetail={this.handleGetDetail}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(CarsList);
