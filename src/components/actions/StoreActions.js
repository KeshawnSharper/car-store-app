// Add selected item to cart

import axios from "axios";
export const purchase_loading = () => {
  return {
    type: "PURCHASE_LOADING"
  };
};
export const purchase_success = (order) => {
  return {
    type: "PURCHASE_SUCCESS",
    payload: order
  };
};
export const purchase_error = () => {
  return {
    type: "PURCHASE_ERROR"
  };
};

// Provides selected item and quantity of item as parameters
export const addToCart = (item, quantity) => {
  return {
    type: "ADD_TO_CART",
    item,
    quantity
  };
};
export const login = (user) => {
  let success = false;
  axios
    .post("https://storebe.herokuapp.com/login", user)
    .then((res) => {
      localStorage.setItem("user_id", res.data.userid);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("firstname", res.data.first_name);
      localStorage.setItem("lastname", res.data.last_name);
      localStorage.setItem("email", res.data.email);
      success = true;
    })
    .catch((err) => {
      success = false;
    });
  if (success) {
    return {
      type: "LOGIN",
      payload: user
    };
  } else {
    return {
      type: "LOGIN_ERROR"
    };
  }
};

export const register = (user) => {
  let success = false;
  axios
    .post("https://storebe.herokuapp.com/register", user)
    .then((res) => {
      success = true;
    })
    .catch((err) => {
      success = false;
    });
  if (success) {
    return {
      type: "REGISTER",
      payload: user
    };
  } else {
    return {
      type: "REGISTER_ERROR"
    };
  }
};

export const purchase = (order) => {
  axios.post("https://storebe.herokuapp.com/orders", order).then((res) => {});
  return {
    type: "PURCHASE",
    payload: order
  };
};
// Remove selected item from cart
// Provides selected item as parameters
export const removeFromCart = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    item
  };
};
