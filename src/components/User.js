import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div className="onepost">
        <h2 className="onepost_parts">Name: {this.props.user.name}</h2>
        <p className="onepost_parts">Contact: {this.props.user.email}</p>
        <p className="onepost_parts">{this.props.user.date}</p>
      </div>
    );
  }
}
