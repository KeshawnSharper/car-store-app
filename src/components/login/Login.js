import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Loader from "react-loader-spinner";
import { login } from "../actions/StoreActions";
const mapStateToProps = (state) => {
  return {
    user: state.user,
    error: state.login_error
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (props) => {
      dispatch(login(props));
    }
  };
};
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loading: false,
      error: false
    };

    this.update = this.update.bind(this);

    this.displayLogin = this.displayLogin.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  displayLogin(e) {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .post("https://storebe.herokuapp.com/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then((res) => {
        localStorage.setItem("user_id", res.data.userid);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("firstname", res.data.first_name);
        localStorage.setItem("lastname", res.data.last_name);
        localStorage.setItem("email", res.data.email);
        this.setState({ loading: false });
        this.props.history.push("/home");
      })
      .catch((err) => {
        this.setState({ error: true, loading: false });
      });
    this.setState({
      email: "",
      password: ""
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
          <form className="login-form" onSubmit={this.displayLogin}>
            {this.state.error ? <h3>Try again </h3> : null}
            <input
              type="text"
              placeholder="username"
              name="email"
              value={this.state.email}
              onChange={this.update}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.update}
            />
            <button>login</button>
            <p className="message">
              Not registered? <Link to="/register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
