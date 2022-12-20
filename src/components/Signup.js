import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { APIURL } from "..";
import { signup } from "../API";




const Signup = ({ setToken }) => {
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
      const tokenInfo = await signup(username, password);
      alert("Signup successful");
      setToken(tokenInfo);
      history.push("/Posts");
    } catch (e) {
      console.error(e)
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

        <button type="submit">Create</button>
        {error}
      </form>
    </div>
  );
};

export default Signup;
