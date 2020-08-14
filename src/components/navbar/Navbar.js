import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav } from "shards-react";
import { NavLink } from "shards-react";
import Logout from "../logout/Logout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
library.add(faShoppingCart);
library.add(faHistory);

export default class NavExample extends React.Component {
  render() {
    return (
      <Navbar type="dark" theme="dark" expand="md">
        <NavbarBrand tag={Link} to="/home">
          Lavish Cars
        </NavbarBrand>

        {/* Link to shopping cart */}
        {/* Aligned to right */}
        <Nav navbar className="ml-auto">
          <NavLink active tag={Link} to="/cart">
            <FontAwesomeIcon icon="shopping-cart" />
          </NavLink>

          <NavLink active tag={Link} to="/history">
            <FontAwesomeIcon icon="history" />
          </NavLink>
          <NavLink active>
            <Logout />
          </NavLink>
        </Nav>
      </Navbar>
    );
  }
}
