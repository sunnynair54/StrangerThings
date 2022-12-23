import React, { useState, useEffect } from "react";
import { APIURL } from "..";

const Profile = ({ token }) => {

  const [myPosts, setMyPosts] = useState([])


  const postedByMe = async () => {
    try {
      const res = await fetch(`${APIURL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      console.log(data)
      setMyPosts(data.data.posts);
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    postedByMe();

  }, []);

  return <>
    <div>
      {myPosts.filter((post) => {
        return post.active
      }).map((post, i) => {
        return (
          <div className="posts_info" key={i}>
            {post.title}

          </div>
        )

      })}
    </div>
  </>

};


export default Profile;
