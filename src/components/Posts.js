import React, { useEffect, useState } from "react";
import { APIURL } from "..";
import { Link } from "react-router-dom";







const Posts = ({ token, setPostId }) => {
  const [posts, setPosts] = useState([]);
  const [searching, setSearching] = useState('');

  useEffect(() => {
    fetchpost()
  }, []);


  const fetchpost = async () => {
    const res = await fetch(`${APIURL}/posts`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await res.json();
    setPosts(data.data.posts);
    console.log(data.data.posts)

    // console.log(data);
  };
  //   console.log(posts.title);

  const handleDelete = async (id) => {
    await postDelete(id)
    fetchpost()
  }

  const postDelete = async (id) => {
    try {
      const response = await fetch(`${APIURL}/posts/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const deletedPost = await response.json();
      console.log(deletedPost);
    } catch (error) {
      console.log('err'.err);
    }
  };

  const handleMessage = (id) => {
    setPostId(id)
  }

  const searchPosts = () => {
    for (const element of posts) {
      console.log(element)
    };

    console.log(searching)
    console.log(posts.title)

  }
  // const handleSearch = (event) => {
  //   event.preventDefault()
  //   setSearching(event.target.value);
  // };


  return (
    <>
      <Link to="/CreatePost">Create New Post</Link>
      <input
        className="searchBar"
        type="text"
        value={searching}
        onChange={(event) => {
          setSearching(event.target.value)
          searchPosts()
          console.log(searching)
        }}
      ></input>
      <div>
        {posts.map((post) => {
          return (
            <div className="posts_info" key={post._id}>
              <h2>{post.title}</h2>
              <h3>{post.author.username}</h3>
              <h3> {post.price}</h3>
              <h3> {post.description}</h3>
              <div>
                {post.isAuthor === true ? `Posted by: ${post.author.username}` : ''}
              </div>
              {post.isAuthor === false ?
                <Link to="/Send_a_message">
                  <button onClick={() => handleMessage(post._id)}>Message</button>
                </Link>
                : ''}
              <div>
                {post.isAuthor === true ? <button onClick={() => handleDelete(post._id)} id='deleteButton'>Delete</button> : ''}
              </div>
            </div>
          );
        })}
      </div></>
  );
};


export default Posts;
