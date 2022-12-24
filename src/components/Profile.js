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
            <h2>{post.author.username}</h2>
            <h2>{post.title}</h2>
            <h2> {post.price}</h2>
            <h2> {post.description}</h2>
            <div className="myMessages">
              {post.messages.map((message, i) => {
                return (
                  <div key={i}>
                    <h2 className="messageUserName">{message.fromUser.username}</h2>
                    <h2 className="messageContent">{message.content}</h2>

                  </div>)
              })
              }
            </div>


          </div>
        )

      })}
    </div>
  </>

};


export default Profile;
