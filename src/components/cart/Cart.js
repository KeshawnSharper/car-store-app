import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "shards-react";
import Styled from "../../styled-components/Styled";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";
import CartFooter from "./CartFooter";
import Loader from "react-loader-spinner";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.startLoading = this.startLoading.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
  }
  startLoading() {
    this.setState({
      loading: true
    });
  }
  stopLoading() {
    this.setState({
      loading: false
    });
  }
  render() {
    // If the user has not yet checked out
    return (
      <>
        {this.state.loading ? (
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={300}
            //3 secs
          />
        ) : (
          <Fragment>
            {/* Header section */}
            <Styled.Section top="60px">
              <Styled.Wrapper width="75%">
                {/* Continue shopping button */}
                {/* Links back to main page */}
                <Link to="/home">
                  <Button size="lg" theme="null">
                    {"<"} Continue Shopping
                  </Button>
                </Link>
              </Styled.Wrapper>
            </Styled.Section>

            <Styled.Section top="20px">
              <Styled.Wrapper width="70%">
                {/* Table section for shopping cart */}
                {/* Container from Shards-React */}
                {/* Renders three seperate components */}
                <Container fluid>
                  <CartHeader />
                  <CartItems />
                  <CartFooter
                    startLoading={this.startLoading}
                    stopLoading={this.stopLoading}
                    order={() => this.checkOut()}
                  />
                </Container>
              </Styled.Wrapper>
            </Styled.Section>
          </Fragment>
        )}
      </>
    );
  }
}

export default Cart;
