// import react component
// export component: inside export-> the constructor and render our view jsx
import React, { Component } from "react";

export default class AddPost extends Component {
  //call constructor props with state in it.. why???
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      author: "",
      authoiId: ""
    };
  }

  //function to handle each changes
  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };
  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };
  handleAuthorChange = event => {
    this.setState({ author: event.target.value });
  };
  handleAuthorIdChange = event => {
    this.setState({ authorId: event.target.value });
  };
  handleSubmit = event => {
    this.props.submitItem(this.state); // wht is submititem?? ans: we will create submititem function on posts page
    this.setState({
      title: "",
      description: "",
      author: "",
      authorId: ""
    });
  };

  //render everything
  render() {
    return (
      <form>
        <h2> Create Post</h2>
        <label>
          <input
            placeholder="Title"
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </label>
        <label>
          <input
            placeholder="Description"
            type="text"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
        </label>
        <input type="submit" value="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}
