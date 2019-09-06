import React, { useState } from 'react'
const Button = () => {
    const [isClick, setIsClick] = useState(false)
    const toggle = () => {
        setIsClick(!isClick)
    }
    return (
        <div>
            <label htmlFor="username-input">Username</label>
            <input id="username-input" />
            <input placeholder="Username" />
            <a href="/about">About ℹ️</a>

            <img alt="Incredibles 2 Poster" src="/incredibles-2.png" />

            <title>Close</title>


            <button data-testid="btn-toggle" onClick={toggle}>按鈕</button>
            <div data-testid="content">{isClick ? 'clicked' : 'unclick'}</div>
        </div>
    )
}

export default Button