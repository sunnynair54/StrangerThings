import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { APIURL } from "..";


const CreatePost = ({ token }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const history = useHistory()


    const handleTitle = (event) => {
        setTitle(event.target.value);

    }
    const handleDescription = (event) => {
        setDescription(event.target.value);

    }
    const handlePrice = (event) => {
        setPrice(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const response = await fetch(`${APIURL}/posts/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    post: {
                        title: title,
                        description: description,
                        price: price,

                    }
                })
            });
            const postData = await response.json();
            console.log(postData);
            setTitle(postData.data.post.title);
            setDescription(postData.data.post.title);
            setPrice(postData.data.post.price);



        } catch (e) {
            console.error(e);

        }
        setTitle('')
        setDescription('')
        setPrice('')
        history.push("/Posts")

    }
    return (
        <div className='createPost'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="Title"
                    value={title}
                    onChange={handleTitle}
                />

                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleDescription}
                />

                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    name="price"
                    value={price}
                    onChange={handlePrice}
                />

                <button type="submit">Post!</button>
            </form>
        </div>
    )
}


export default CreatePost;