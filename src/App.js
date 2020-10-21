import React from "react";
import Posts from "./components/Posts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Blog</h1>
      </header>

      <body>
        <div className="postlist">
          <Posts />
        </div>
      </body>

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
