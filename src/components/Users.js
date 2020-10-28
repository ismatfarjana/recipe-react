import React, { Component } from "react";
import axios from "axios";

import User from "./User";
import Login from "./Login";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  getAllUsers = () => {
    axios
      .get("https://syeda-recipe-api.herokuapp.com/api/users/all")
      .then(res => {
        console.log(res.data);
        this.setState({ users: res.data });
      })
      .catch();
  };

  componentDidMount() {
    this.getAllUsers();
  }
  renderAllUsers = () => {
    return this.state.users.map(user => {
      return <User key={user._id} user={user} />;
    });
  };
  render() {
    // const loggedIn = this.props.loggedIn;

    return (
      <div className="itemlist">
        <div className="itemlist_part">
          <h2>All Users</h2>
          <div className="users">
            {this.state.users.length ? (
              this.renderAllUsers()
            ) : (
              <h3>Wait for the list to load</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}
