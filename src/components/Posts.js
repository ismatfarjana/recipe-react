import React, { Component } from "react";
// need axios here to fetch data and show

//import component item
import AddPost from "./AddPost";

//export component item
export default class Posts extends Component {
  //call constructor
  // constructor(props) {
  //   super(props);
  //   //create state to hold items in an empty array
  //   this.state = {
  //     posts: []
  //   };
  // }

  //render item
  render() {
    return (
      //return component item
      <AddPost />
    );
  }
}
