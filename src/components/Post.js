import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div className="onepost">
        <h2 className="onepost_parts">{this.props.post.title}</h2>
        <p className="onepost_parts">{this.props.post.description}</p>
        <p className="onepost_parts">{this.props.post.date}</p>
      </div>
    );
  }
}
