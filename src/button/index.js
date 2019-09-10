import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
const Button = ({ history }) => {
    const [isClick, setIsClick] = useState(false)
    const toggle = () => {
        setIsClick(!isClick)
    }
    const params = new URLSearchParams(history.location.search)
    console.log()
    return (
        <div>
            <h4 className="title">{params.get('city')}</h4>
            <button data-testid="btn-toggle" onClick={toggle}>按鈕</button>
            <div data-testid="content">{isClick ? 'clicked' : 'unclick'}</div>
        </div>
    )
}

export default withRouter(Button)