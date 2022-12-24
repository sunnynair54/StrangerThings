import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Home, Login, Posts, Profile, Signup, CreatePost, Send_a_message } from "./components";


export const APIURL =
  "https://20a4d1385484.ngrok.io/api/2209-FTB-CT-WEB-PT";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("myToken"));
  const saveToken = (token) => {
    setToken(token);
    localStorage.setItem("myToken", token);
  };
  const [postId, setPostId] = useState('')


  const removeToken = () => {
    setToken(null)
    localStorage.removeItem("myToken");
  }





  return (
    <BrowserRouter>
      <div>
        <header>
          <nav className="nav">
            <h1 className="mainTitle">Stranger's Things</h1>
            <h2 className="Links">
              <Link exact to="/Home">Home</Link>
              <Link to="/Posts">Posts</Link>
              <Link to="/Profile">Profile</Link>
              <Link to="/Login">
                <div className="logoutbutton">
                  {token === null ? <button>Login</button> : <button onClick={removeToken}>LogOut</button>}
                </div>
              </Link>
            </h2>

            <span className="signInandOut">
              <div className></div>

            </span>
          </nav>
        </header>
        <div>
          <Route path="/Home">
            <Home token={token} />
          </Route>
          <Route path="/Posts">
            <Posts token={token}
              setPostId={setPostId} />
          </Route>
          <Route path="/Profile">
            <Profile token={token}
              postId={postId} />
          </Route>
          <Route path="/Login">
            <Login setToken={saveToken} token={token} />
          </Route>
          <Route path="/Signup">
            <Signup setToken={saveToken} />
          </Route>
          <Route path="/CreatePost">
            <CreatePost token={token} />
          </Route>
          <Route path="/Send_a_message">
            <Send_a_message token={token}
              postId={postId} />
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
