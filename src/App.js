import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import Authentication from "./components/Authentication";
import Route from "./components/Route";
import Header from "./components/Header";

function App() {
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
              <Authentication />
            </Route>
          </div>
          <div className="postlist_part">
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
            <a href="https://www.codewars.com/users/ismatfarjana">Code wars</a>
          </div>
          <div className="copyright">
            Syeda Ismat Farjana &copy; 2020 MERN APP
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
