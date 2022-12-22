import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { APIURL } from "..";

const Login = ({ setToken }) => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${APIURL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username,
            password,
          },
        }),
      });
      const json = await response.json();
      if (json.success === false) {
        throw json.error.message;
      }

      alert("Login successful");
      setToken(json.data.token);
      history.push("/Posts");
    } catch (e) {
      console.error(e);
      setError(e);
    }

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
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>
      </form>
      {error}
      <Link to="/Signup">Signup</Link>
    </div>
  );
};

export default Login;
