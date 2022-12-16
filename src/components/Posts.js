import React, { useEffect, useState } from "react";

const Posts = ({ APIURL }) => {
  const [posts, setPosts] = useState([]);

  const fetchpost = async () => {
    const res = await fetch(`${APIURL}/Posts`);
    const data = await res.json();
    setPosts(data.data.posts);

    // console.log(data);
  };
  //   console.log(posts.title);

  useEffect(() => {
    fetchpost();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="post_info" key={post._id}>
            {post.author.username}
            {post.title}
            {post.price}
            {post.description}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
