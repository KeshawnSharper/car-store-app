import lambo from "../images/lambo.jpg";
import ferrari from "../images/ferrari.jpg";
import mcclaren from "../images/mcclaren.jpg";
import rollsRoyce from "../images/rollsroyce.jpg";
import BMW from "../images/bmw.jpg";
import porshe from "../images/porshe.jpg";
import tesla from "../images/tesla.jpg";
import corvette from "../images/corvette.jpg";

import aventador from "../images/aventador.jpg";
import huracan from "../images/huracan.jpg";
import urus from "../images/urus.jpg";
import ferrari_488 from "../images/488.jpg";
import ferrari_812 from "../images/812.jpg";
import ferrari_f8 from "../images/f8.jpg";
import p1 from "../images/p1.jpg";
import mclaren_720s from "../images/720s.jpg";
import senna from "../images/senna.jpg";
import mcclaren_570s from "../images/570s.jpg";
import wraith from "../images/wraith.jpg";
import phantom from "../images/phantom.jpg";
import ghost from "../images/ghost.jpg";
import series_5 from "../images/series_5.jpg";
import series_x5 from "../images/series_x5.jpg";
import bmw_i8 from "../images/i8.jpg";
import bmw_x1 from "../images/x1.jpg";
import porshe_911 from "../images/911.jpg";
import macan from "../images/macan.jpg";
import model_3 from "../images/model_3.jpg";
import model_x from "../images/model_x.jpg";
import model_y from "../images/model_y.jpg";
// import huracan from "../images/huracan.jpg";
// import cupcake3 from "../images/sweet-frosting.jpg";
// import cupcake4 from "../images/royal-red.jpg";
// import cupcake5 from "../images/floral-pastel.jpg";
// import cupcake6 from "../images/party-muffin.jpg";

// Exports the initial state
const initState = {
  user: {
    username: null,
    id: null
  },
  loading: false,
  register_error: false,
  login_error: false,
  orders: [],
  // Cake items in the store
  brands: [
    {
      id: 1,
      title: "Lamborghini",
      desc: "Create anything you desire.",
      img: lambo,
      price: 470000
    },
    {
      id: 2,
      title: "Ferrari",
      desc: "We don't have to be concerned.",
      img: ferrari,
      price: 200000
    },
    {
      id: 3,
      title: "Mclaren",
      desc: "Let it fall where it will.",
      img: mcclaren,
      price: 150000
    },
    {
      id: 4,
      title: "Rolls Royce",
      desc: "See it finished in your mind.",
      img: rollsRoyce,
      price: 570000
    },
    {
      id: 5,
      title: "BMW",
      desc: "Decide where your cloud lives.",
      img: BMW,
      price: 140000
    },
    {
      id: 6,
      title: "Porshe",
      desc: "Take a step back and look.",
      img: porshe,
      price: 160000
    },
    {
      id: 7,
      title: "Tesla",
      desc: "It's all a game of angles.",
      img: tesla,
      price: 80000
    },
    {
      id: 8,
      title: "Corvette",
      desc: "Put your feelings into it.",
      img: corvette,
      price: 75000
    }
  ],

  // Cupcake items
  cars: [
    {
      id: 1,
      brand: "Lamborghini",
      title: "Aventador",
      desc: "Always one step further.",
      img: aventador,
      price: 350000,
      product_id: 101
    },
    {
      id: 2,
      brand: "Lamborghini",
      title: "Huracan",
      desc: "There's really no end to this.",
      img: huracan,
      product_id: 102,
      price: 250000
    },
    {
      id: 3,
      brand: "Lamborghini",
      title: "Urus",
      desc: "There's really no end to this.",
      img: urus,
      product_id: 103,
      price: 270000
    },
    {
      id: 4,
      brand: "Ferrari",
      title: "458",
      desc: "There's really no end to this.",
      img: ferrari,
      product_id: 201,
      price: 265000
    },
    {
      id: 5,
      brand: "Ferrari",
      title: "488",
      desc: "There's really no end to this.",
      img: ferrari_488,
      product_id: 202,
      price: 375000
    },
    {
      id: 6,
      brand: "Ferrari",
      title: "812",
      desc: "There's really no end to this.",
      img: ferrari_812,
      product_id: 203,
      price: 500000
    },
    {
      id: 7,
      brand: "Ferrari",
      title: "f8",
      desc: "There's really no end to this.",
      img: ferrari_f8,
      product_id: 204,
      price: 185000
    },
    {
      id: 8,
      brand: "Mclaren",
      title: "p1",
      desc: "There's really no end to this.",
      img: p1,
      product_id: 301,
      price: 185000
    },
    {
      id: 9,
      brand: "Mclaren",
      title: "720s",
      desc: "There's really no end to this.",
      img: mclaren_720s,
      product_id: 302,
      price: 285000
    },
    {
      id: 10,
      brand: "Mclaren",
      title: "senna",
      desc: "There's really no end to this.",
      img: senna,
      product_id: 303,
      price: 315000
    },
    {
      id: 11,
      brand: "Mclaren",
      title: "570s",
      desc: "There's really no end to this.",
      img: mcclaren_570s,
      product_id: 304,
      price: 325000
    },

    {
      id: 13,
      brand: "Rolls Royce",
      title: "Wraith",
      desc: "There's really no end to this.",
      img: wraith,
      product_id: 401,
      price: 325000
    },
    {
      id: 14,
      brand: "Rolls Royce",
      title: "Phantom",
      desc: "There's really no end to this.",
      img: phantom,
      product_id: 402,
      price: 355000
    },
    {
      id: 15,
      brand: "Rolls Royce",
      title: "Ghost",
      desc: "There's really no end to this.",
      img: ghost,
      product_id: 403,
      price: 355000
    },
    {
      id: 16,
      brand: "BMW",
      title: "Series 5",
      desc: "There's really no end to this.",
      img: series_5,
      product_id: 501,
      price: 200000
    },
    {
      id: 17,
      brand: "BMW",
      title: "Series X5",
      desc: "There's really no end to this.",
      img: series_x5,
      product_id: 502,
      price: 160000
    },
    {
      id: 18,
      brand: "BMW",
      title: "BMW I8",
      desc: "There's really no end to this.",
      img: bmw_i8,
      product_id: 503,
      price: 185000
    },

    {
      id: 19,
      brand: "BMW",
      title: "Series X1",
      desc: "There's really no end to this.",
      img: bmw_x1,
      product_id: 504,
      price: 215000
    },
    {
      id: 21,
      brand: "Porshe",
      title: "911",
      desc: "There's really no end to this.",
      img: porshe_911,
      product_id: 601,
      price: 215000
    },
    {
      id: 22,
      brand: "Porshe",
      title: "Macan",
      desc: "There's really no end to this.",
      img: macan,
      product_id: 602,
      price: 115000
    },
    {
      id: 23,
      brand: "Tesla",
      title: "Model 3",
      desc: "There's really no end to this.",
      img: model_3,
      product_id: 701,
      price: 45000
    },
    {
      id: 24,
      brand: "Tesla",
      title: "Model Y",
      desc: "There's really no end to this.",
      img: model_y,
      product_id: 702,
      price: 85000
    },
    {
      id: 25,
      brand: "Tesla",
      title: "Model X",
      desc: "There's really no end to this.",
      img: model_x,
      product_id: 703,
      price: 65000
    },
    {
      id: 26,
      brand: "Corvette",
      title: "Sting Ray",
      desc: "There's really no end to this.",
      img: corvette,
      product_id: 801,
      price: 65000
    }

    // {
    //   id: 11,
    //   title: "Sweet Frosting",
    //   desc: "Something you can't fail at.",
    //   img: cupcake3,
    //   price: 1.4
    // },
    // {
    //   id: 12,
    //   title: "Royal Red",
    //   desc: "Wherever you want to be.",
    //   img: cupcake4,
    //   price: 1.5
    // },
    // {
    //   id: 13,
    //   title: "Floral Pastel",
    //   desc: "We have plenty of time.",
    //   img: cupcake5,
    //   price: 2.1
    // },
    // {
    //   id: 14,
    //   title: "Party Muffin",
    //   desc: "Bring them into your world.",
    //   img: cupcake6,
    //   price: 1.4
    // }
  ],

  // Shopping cart
  cart: [],

  // Total price of items in cart
  total: 0
};

export default initState;
