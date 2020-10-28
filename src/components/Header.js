import React, { Component } from "react";
import axios from "axios";
import Link from "./Link"; //link is to create route without full reloading the whole page

class Header extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout = event => {
    event.preventdefault();
    console.log("logging out");
    axios
      .post("https://syeda-recipe-api.herokuapp.com/api/users/logout")
      .then(res => {
        if (res.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            name: null
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);
    return (
      <div className="navbar">
        <Link href="/" className="item">
          Home
        </Link>

        <Link href="/api/posts" className="item">
          Posts
        </Link>

        <Link href="/api/users/all" className="item">
          Users
        </Link>

        {loggedIn ? (
          <Link href="/api/users/logout" className="item" onClick={this.logout}>
            Logout
          </Link>
        ) : (
          <div>
            <Link href="/api/users/register" className="item">
              Register
            </Link>
            <Link href="/api/users/login" className="item">
              LogIn
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
