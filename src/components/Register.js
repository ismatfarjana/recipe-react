import React, { useState } from "react";
import axios from "axios";

function Register() {
  //create states for differnt authentication parts to store the state of wht user is typing
  const [registerUserName, setRegisterUserName] = useState("");
  const [registerUserEmail, setRegisterUserEmail] = useState("");
  const [registerUserPassword, setRegisterUserPassword] = useState("");

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

  return (
    <div className="auth">
      <div className="auth_parts">
        <h2>Register</h2>
        <label>
          <input
            placeholder="name"
            onChange={e => setRegisterUserName(e.target.value)}
          />
        </label>
        <label>
          <input
            placeholder="email"
            onChange={e => setRegisterUserEmail(e.target.value)}
          />
        </label>
        <label>
          <input
            placeholder="password"
            onChange={e => setRegisterUserPassword(e.target.value)}
          />
        </label>

        <button type="submit" onClick={register}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Register;
