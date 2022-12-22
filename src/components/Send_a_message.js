import React, { useState } from 'react'
import { APIURL } from "..";

const Send_a_message = ({ token }) => {
    const [message, setMessage] = useState('')

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleMessage = async (event) => {
        event.preventDefault();



        const res = await fetch(`${APIURL}posts/${posts._id}/messages`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                message: {
                    content: message
                }
            })
        });
        const data = await res.json();
        setMessage(data);
    }

    return (
        <div id="container">
            <div id="messages"></div>
            <form onSubmit={handleMessage}>
                <label htmlFor="message">Message:</label>
                <input
                    type="text"
                    name="message"
                    value={message}
                    onChange={handleChange}
                />
                <button type="submit">Send Message!</button>
            </form>
        </div>
    )
}
    ;

export default Send_a_message