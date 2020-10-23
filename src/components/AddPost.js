// import react component
// export component: inside export-> the constructor and render our view jsx
import React, { Component } from "react";

export default class AddPost extends Component {
  //call constructor props with state in it.. why???
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     post: ""
  //   };
  // }

  render() {
    return (
      <form>
        <h2> Create Post</h2>
        <label>
          <input placeholder="Title" type="text" />
        </label>
        <label>
          <input placeholder="Description" type="text" />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}
