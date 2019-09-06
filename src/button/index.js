import React, { useState } from 'react'
const Button = () => {
    const [isClick, setIsClick] = useState(false)
    const toggle = () => {
        setIsClick(!isClick)
    }
    const fn = (e, val) => {
        e.preventDefault()
        console.log(val)
    }
    return (
        <div>
            <button data-testid="btn-toggle" onClick={toggle}>按鈕</button>
            <button data-testid="sendData" onClick={(e) => fn(e, '123')}> 按鈕</button>
            <div data-testid="content">{isClick ? 'clicked' : 'unclick'}</div>
        </div>
    )
}

export default Button