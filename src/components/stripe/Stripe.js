import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { purchase } from "../actions/StoreActions";
import StripeCheckout from "react-stripe-checkout";
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    total: state.total
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    purchase: (order) => {
      dispatch(purchase(order));
    }
  };
};
function Stripe(props) {
  const [product] = React.useState({
    name: `$${props.total}`,
    price: props.total
  });
  async function handleToken(token, address) {
    props.startLoading();

    const response = await axios.post(
      "https://storebe.herokuapp.com/checkout",
      {
        token,
        product
      }
    );
    if (response.data === "") {
      props.stopLoading();
      purchaseCartItems(address);
    } else {
      props.stopLoading();
    }
  }
  const purchaseCartItems = (info) => {
    props.cart.forEach((item) => {
      let product = {};
      product.user_id = localStorage.getItem("user_id");
      product.product_id = item.id;
      product.email = localStorage.getItem("email");
      product.street =
        info.billing_address_line1 +
        info.billing_address_state +
        info.billing_address_zip;
      product.city = info.shipping_address_city;
      product.country = info.shipping_address_country;
      product.delivered = false;
      product.date_ordered = new Date();
      product.price = item.price;
      props.purchase(product);
    });
  };
  return (
    <div className="container">
      <StripeCheckout
        stripeKey="pk_test_51GmhlnFRrEOe5mtdA8OzDmWFpoOl2qGOJ4zBOY0FemAGiX9br4wn4cwRSQ0lScSGdUU8Zbyp1I3J5hu6EnueShqm004LjHrcgs"
        token={handleToken}
        amount={props.total * 100}
        billingAddress
        shippingAddress
        name={product.name}
      />
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Stripe);
