import React, { useEffect, useState } from "react";
import { APIURL } from "..";
import { Link } from "react-router-dom";
import { async } from "q";





const Posts = ({ token }) => {
  const [posts, setPosts] = useState([]);


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

  const postDelete = async () => {
    try {
      const response = await fetch(`${APIURL}posts/${id}`, {
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

    useEffect(() => {
      fetchpost()

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
                <div>
                  {post.isAuthor === true ? `Posted by: ${post.author.username}` : ''}
                </div>
                {post.isAuthor === false ?
                  <Link to="/Send_a_message">
                    <button>Message</button>
                  </Link>
                  : ''}
                <div>
                  {post.isAuthor === true ? <button onClick={() => handleDelete(post._id)}>Delete</button> : ''}
                </div>
              </div>
            );
          })}
        </div></>
    );
  }
};

export default Posts;
