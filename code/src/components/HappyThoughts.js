import React, { useEffect } from 'react'
import { useState } from 'react'
import { moment } from 'moment'


export const HappyThoughts = () =>  {
    const THOUGHTS_URL ='https://happy-thoughts-technigo.herokuapp.com/thoughts';
    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
    fetch(THOUGHTS_URL)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        setThoughts(data);
    });
    }, []);

    return (
    <div className='thoughts-card'>{thoughts.map(message => {
        return (
            <p className='message' key={message._id}>
            {message.message}
            {moment(message.createdAt).fromNow()} {/*The code on this row is not working*/}
            <button className='like-button'>
            <span role='img' aria-label='heart'>❤️ </span>
            </button>
            </p>
        );
        
        })};
        
        
        </div>
    );
    };