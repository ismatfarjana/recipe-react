import React, { useState } from "react";
import axios from "axios";

function Login() {
  //create states for differnt authentication parts to store the state of wht user is typing
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [loginUserPassword, setLoginUserPassword] = useState("");
  // const [data, setData] = useState(null);

  const login = () => {
    axios({
      method: "POST",
      data: {
        email: loginUserEmail,
        password: loginUserPassword
      },
      withCredentials: false, //why?????
      url: "https://syeda-recipe-api.herokuapp.com/api/users/login"
    })
      .then(res => {
        console.log(res);
        setLoginUserEmail("");
        setLoginUserPassword("");
      })
      .catch();
  };

  // const getUser = () => {
  //   axios({
  //     method: "GET",
  //     withCredentials: false, //why?????
  //     url: "https://syeda-recipe-api.herokuapp.com/api/users/all"
  //   })
  //     .then(res => setData(res.data))
  //     .catch();
  // };

  return (
    <div className="auth">
      <div className="auth_parts">
        <h2>Login</h2>
        <label>
          <input
            placeholder="email"
            onChange={e => setLoginUserEmail(e.target.value)}
          />
        </label>

        <label>
          <input
            placeholder="password"
            onChange={e => setLoginUserPassword(e.target.value)}
          />
        </label>

        <button type="submit" onClick={login}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
