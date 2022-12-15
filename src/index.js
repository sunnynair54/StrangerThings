import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Home, Login, Posts, Profile } from "./components";

const App = () => {
    const APIURL = 'https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT'; 
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
            <Home />
          </Route>
          <Route path="/Posts">
            <Posts APIURL = {APIURL}/>
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
