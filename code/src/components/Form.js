import React from 'react'

import { useState } from 'react'

const FORM_URL='https://happy-thoughts-technigo.herokuapp.com/thoughts'
//states for the message so that we can change it
export const Form = (props) => {
    const [message, setMessage] = useState("")
    
//This function is for when we are creating a thought and posting it to the API
    const handleSubmit = (event) => {
    event.preventDefault()
    fetch(FORM_URL, {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({message}),
    })

    .then(() => {
        setMessage('')
        window.location.reload();
     /*    props.onFormSubmit(message) */
    })
    } 
    
     //This is the form where we write our message 
    
    return (
    <form className='form'>
        <h3>What's making you happy right now?</h3>
       { <textarea
        rows='3'
        cols='60'
        value={message}
        onChange={event => setMessage(event.target.value)}
        ></textarea>}
        <div>
            <button className="send-button"
            type="submit"
            onClick={handleSubmit}
            >
            <span role='img' aria-label='heart'>❤️ </span>Send Happy thought!<span role='img' aria-label='heart'>❤️ </span></button>
        </div>
    </form>
    )
}