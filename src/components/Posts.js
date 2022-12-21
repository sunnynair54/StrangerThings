import React, { useEffect, useState } from "react";
import { APIURL } from "..";
import { Link } from "react-router-dom";





const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchpost = async () => {
    const res = await fetch(`${APIURL}/posts`,);
    const data = await res.json();
    setPosts(data.data.posts);

    // console.log(data);
  };
  //   console.log(posts.title);

  useEffect(() => {
    fetchpost();
  }, []);

  return (
    <>
      <Link to="/CreatePost">Create New Post</Link>
      <div>
        {posts.map((post) => {
          return (
            <div className="posts_info" key={post._id}>
              <h2>{post.title}</h2>
              <h3>{post.author.username}</h3>
              <h3> {post.price}</h3>
              <h3> {post.description}</h3>
              <Link to="/Send_a_message">
                <button>message</button>
              </Link>
            </div>
          );
        })}
      </div></>
  );
};

export default Posts;
