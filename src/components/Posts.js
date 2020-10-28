import React, { Component } from "react";
import axios from "axios"; // need axios here to fetch data and show

//import component item
import AddPost from "./AddPost";
import Post from "./Post";

//export component item
export default class Posts extends Component {
  //call constructor
  constructor(props) {
    super(props);
    //create state to hold items in an empty array
    this.state = {
      posts: []
    };
  }

  //get all posts from our API and update the sate with it
  getAllPosts = () => {
    axios
      .get("https://syeda-recipe-api.herokuapp.com/api/posts/")
      .then(res => {
        console.log(res.data);
        this.setState({ posts: res.data });
      })
      .catch();
  };

  //qs: what dose componentdidmount do???
  componentDidMount() {
    this.getAllPosts();
  }

  //handleSubmitItem function: go to api, create a new post then update the allpostarray and set the state of allposts to updatedposts
  handleSubmitPost = newPost => {
    axios
      .post("https://syeda-recipe-api.herokuapp.com/api/posts/", {
        title: newPost.title,
        description: newPost.description,
        author: newPost.author,
        authorId: newPost.authorId,
        date: new Date()
      })
      .then(res => {
        //create a variable for updated posts list array
        const updatedPosts = this.state.posts.concate(res.data);
        //updat the state of allposts to updatedposts
        this.setState({ posts: updatedPosts });
      })
      .catch(err => {
        console.log(err);
      });
  };

  //render all posts list with the new one
  renderAllPosts = () => {
    //this will return allposts current state and show each post by mapping over the array of all posts
    return this.state.posts.map(post => {
      return <Post key={post._id} post={post} />;
    });
  };

  //render item
  render() {
    const loggedIn = this.props.loggedIn;
    return (
      //return component item
      <div className="itemlist">
        <div className="itemlist_part">
          <h2>All posts</h2>
          <div className="posts">
            {this.state.posts.length ? (
              this.renderAllPosts()
            ) : (
              <h3>Wait for the list to load</h3>
            )}
          </div>
        </div>

        {/* //create new post */}
        <div className="itemlist_part">
          {loggedIn ? (
            <AddPost submitItem={this.handleSubmitPost} />
          ) : (
            <h2>Please Login to create post</h2>
          )}

          {/* //set submititem value as handlesubmitpost function state. handleSubmitItem is above */}
        </div>
      </div>
    );
  }
}
