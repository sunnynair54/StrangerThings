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
      {posts.map((post, i) => {
        return <div key={i}>{post.title}</div>;
      })}
    </div>
  );
};

export default Posts;
