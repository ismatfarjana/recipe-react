import React, { useState } from "react";
import axios from "axios";

function Authentication() {
  //create states for differnt authentication parts to store the state of wht user is typing
  const [registerUserName, setRegisterUserName] = useState("");
  const [registerUserEmail, setRegisterUserEmail] = useState("");
  const [registerUserPassword, setRegisterUserPassword] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [loginUserPassword, setLoginUserPassword] = useState("");
  const [data, setData] = useState(null);

  const register = () => {
    axios({
      method: "POST",
      data: {
        name: registerUserName,
        email: registerUserEmail,
        password: registerUserPassword
      },
      withCredentials: false, //why?????
      url: "https://syeda-recipe-api.herokuapp.com/api/users/register"
    })
      .then(res => {
        console.log(res);
        setRegisterUserName(" ");
        setRegisterUserEmail(" ");
        setRegisterUserPassword(" ");
      })
      .catch();
  };

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

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: false, //why?????
      url: "https://syeda-recipe-api.herokuapp.com/api/users/all"
    })
      .then(res => setData(res.data))
      .catch();
  };

  return (
    <div className="auth">
      <div className="auth_parts">
        <h2>Register</h2>
        <input
          placeholder="name"
          onChange={e => setRegisterUserName(e.target.value)}
        />
        <input
          placeholder="email"
          onChange={e => setRegisterUserEmail(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={e => setRegisterUserPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>

      <div className="auth_parts">
        <h2>Login</h2>
        <input
          placeholder="email"
          onChange={e => setLoginUserEmail(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={e => setLoginUserPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>

      <div className="auth_parts">
        <h2>Get User</h2>

        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.name}</h1> : null}
      </div>
    </div>
  );
}

export default Authentication;
