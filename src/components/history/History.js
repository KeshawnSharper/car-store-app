import React from "react";
import Title from "../title/Title";
// import "../styles/style-product.css";
import HistoryItem from "../history/HistoryItem";
import { connect } from "react-redux";
import axios from "axios";
const mapStateToProps = (state) => {
  return {
    cars: state.cars
  };
};
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://storebe.herokuapp.com/orders/${Number(
          localStorage.getItem("user_id")
        )}`
      )
      .then((res) => {
        res.data.forEach((car) => {
          let newCar = this.props.cars.find(
            (i) => Number(i.id) === Number(car.product_id)
          );
          newCar.street = car.street;
          newCar.city = car.city;
          newCar.country = car.country;
          newCar.date_ordered = car.date_ordered;
          newCar.delivered = car.delivered === 0 ? false : true;
          this.setState({
            cars: [...this.state.cars, newCar]
          });
        });
        // this.setState({ detail: newDetail });
      });
  }

  render() {
    return (
      <div className="productsList">
        <Title name="Your" title="Orders" />
        <div className="row mt-5">
          {this.state.cars.reverse().map((product) => (
            <HistoryItem key={product.id} data={product} />
          ))}
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(History);
