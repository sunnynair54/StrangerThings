import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
    setPassword(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const username = event.target.username.value
    console.log(username);
    console.log(password);
    setUsername("");
    setPassword("");
  };

  return (
    <div id="container">
      <div id="navbar"></div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <button type="login">Login</button>
      </form>
      <button type="sign_up">Sign Up</button>
    </div>
  );
};

export default Login;
