import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Home, Login, Posts, Profile, Signup } from "./components";

export const APIURL =
  "https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("myToken"));
  const savedToken = (token) => {
    setToken(token);
    localStorage.setItem("myToken", token);
  };

  return (
    <BrowserRouter>
      <div>
        <header>
          <nav className="nav">
            <h1>Stranger's Things</h1>
            <Link to="/Home">Home</Link>
            <Link to="/Posts">Posts</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/Login">Login</Link>
          </nav>
        </header>
        <div>
          <Route path="/Home">
            <Home token={token} />
          </Route>
          <Route path="/Posts">
            <Posts token={token} />
          </Route>
          <Route path="/Profile">
            <Profile token={token} />
          </Route>
          <Route path="/Login">
            <Login setToken={savedToken} token={token} />
          </Route>
          <Route path="/Signup">
            <Signup setToken={savedToken} />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
