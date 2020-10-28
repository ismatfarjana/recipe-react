import React, { Component } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Register from "./components/Register";
import Login from "./components/Login";
import Route from "./components/Route";
import Header from "./components/Header";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      name: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  getUser = () => {
    axios({
      method: "GET",
      withCredentials: false, //why?????
      url: "https://syeda-recipe-api.herokuapp.com/api/users/user_profile"
    })
      .then(res => {
        if (res.data) {
          console.log("there is a user in the server session");
          console.log(res.data);
          this.setState({
            loggedIn: true,
            name: res.data.name
          });
        } else {
          console.log("no user");
          this.setState({
            loggedIn: false,
            name: null
          });
        }
      })
      .catch();
  };

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Recipe Blog</h1>
          <Header />
        </header>

        <div className="body">
          <div className="list">
            <div className="list_part">
              {/* when one jsx is provided another jsx tag the inner element is provided to the outer element as a prop called children , here the authentication component will show inside the route componet as a childern */}
              <Route path="/api/users/register">
                <Register />
              </Route>
            </div>

            <div className="list_part">
              <Route path="/api/users/login">
                <Login />
              </Route>
            </div>

            <div className="list_part">
              <Route path="/api/users/all">
                <Users />
              </Route>
            </div>

            <div className="list_part">
              <Route path="/api/posts">
                <Posts />
              </Route>
            </div>
          </div>
        </div>

        <footer>
          <div className="footer-parts">
            <div className="social">
              <a href="https://www.linkedin.com/in/syeda-ismat-farjana/">
                LinkedIn
              </a>
              <a href="https://twitter.com/ismat_farjana">Twitter</a>
              <a href="https://www.codewars.com/users/ismatfarjana">
                Code wars
              </a>
            </div>
            <div className="copyright">
              Syeda Ismat Farjana &copy; 2020 MERN APP
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
