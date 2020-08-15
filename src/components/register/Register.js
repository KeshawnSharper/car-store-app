import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import axios from "axios";
import Loader from "react-loader-spinner";
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      error: false,
      loading: false
    };

    this.update = this.update.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.displayLogin = this.displayLogin.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }
  handleLogin() {
    axios
      .post("https://storebe.herokuapp.com/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("user_id", res.data.userid);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("firstname", res.data.first_name);
        localStorage.setItem("lastname", res.data.last_name);
        localStorage.setItem("email", res.data.email);
        this.setState({ loading: false });
        this.props.history.push("/home");
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          password: ""
        });
      })
      .catch((err) => {
        this.setState({ error: true, loading: false });
      });
  }

  displayLogin(e) {
    e.preventDefault();
    console.log(this.props);
    console.log("You have successfully registered");
    this.setState({ loading: true });
    axios
      .post("https://storebe.herokuapp.com/register", {
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ loading: false });
        this.handleLogin();
      })
      .catch((err) => {
        this.setState({ error: true, loading: false });
      });
  }

  render() {
    return (
      <div className="login-page">
        <div className="form">
          {this.state.loading ? (
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={100}
              width={300}
              //3 secs
            />
          ) : null}
          <form className="register-form" onSubmit={this.displayLogin}>
            {this.state.error ? <h3>Try again </h3> : null}
            <input
              name="first_name"
              value={this.state.first_name}
              onChange={this.update}
              type="text"
              placeholder="First Name"
            />
            <input
              name="last_name"
              value={this.state.last_name}
              onChange={this.update}
              type="text"
              placeholder="Last Name"
            />
            <input
              value={this.state.password}
              onChange={this.update}
              type="password"
              name="password"
              placeholder="password"
            />
            <input
              type="text"
              placeholder="email address"
              value={this.state.email}
              name="email"
              onChange={this.update}
            />
            <button>Register</button>
            <p className="message">
              Already registered? <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
