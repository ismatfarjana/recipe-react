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
        <label>
          Post Title:
          <input type="text" />
        </label>
        <label>
          Post Description:
          <input type="text" />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}
