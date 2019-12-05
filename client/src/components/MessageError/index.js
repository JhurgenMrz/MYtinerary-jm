import React from 'react'
import './MessageError.css'

export const MessageError = ({ message }) => {
    return (
        <>
            <p className="MessageError">
                {message}
            </p>
        </>
    )
}
