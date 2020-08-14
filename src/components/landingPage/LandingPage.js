import React, { Component } from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div>
      <div className="intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro-message">
                <h1 className="animated bounceInDown">
                  Find Your dream car with Lavish
                </h1>
                <ul
                  className="list-inline intro-social-buttons"
                  id="headerButton"
                >
                  <li>
                    <Link to="/register">
                      {" "}
                      <button
                        href="#"
                        id="button"
                        className="animated bounceInUp btn btn-info btn-lg"
                      >
                        {" "}
                        <span className="network-name">START RIGHT HERE</span>
                      </button>{" "}
                    </Link>
                  </li>
                </ul>
                <div id="empty"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section-a">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-pull-6  col-sm-6">
              {/* /.image credit: simple.com */}
              <img
                className=" img-responsive"
                src="https://www.simple.com/assets/images/simple-kit.png"
                id="responsive"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="content-section-b">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-6">
              <h2 className="section-heading">Shop on your own account</h2>
              <hr className="section-heading-spacer" />
              <div className="clearfix" />
              <p className="lead">
                Sign up and sign into lavish. Use your account to save your
                information and recent orders.
              </p>
            </div>
            <div className="col-lg-5 col-lg-offset-2 col-sm-6">
              <img
                className="img-responsive"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/crunch_money.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      <div className="content-section-c">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
              <h2 className="section-heading">Buy Items with StripeJS</h2>
              <hr className="section-heading-spacer" />
              <div className="clearfix" />
              <p className="lead">
                Shopping online has never been made so easier. Simply enter your
                credit card and the orders you want. Simple transaction
                processing due to stripe.
              </p>
            </div>
            <div className="col-lg-5 col-sm-pull-6  col-sm-6">
              <img
                className="img-responsive"
                src="https://static.pexels.com/photos/57825/pexels-photo-57825-medium.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.content-section-d */}
      <div className="content-section-d">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-6">
              <h2 className="section-heading-white">Mobile friendly</h2>
              <hr className="section-heading-spacer-white" />
              <div className="clearfix" />
              <p className="lead-white">
                Beautiful display and creative design. Mobile responsiveness
                from any pixel size.
              </p>
              <button
                href="#"
                id="button-white"
                className="animated bounceInUp btn btn-info btn-lg"
              >
                {" "}
                <Link to="/login">
                  <span className="network-name">LOG IN</span>
                </Link>
              </button>
            </div>
            <div className="col-lg-5 col-lg-offset-2 col-sm-6">
              <img
                className="phone img-responsive"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/crunch_phone_%26_computer.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* Footer */}
    </div>
  );
}
