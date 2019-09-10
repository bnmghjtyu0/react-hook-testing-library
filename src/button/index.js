import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
const Button = ({history}) => {
    const [isClick, setIsClick] = useState(false)
    const toggle = () => {
        setIsClick(!isClick)
    }
    console.log(history)
    return (
        <div>
            <button data-testid="btn-toggle" onClick={toggle}>按鈕</button>
            <div data-testid="content">{isClick ? 'clicked' : 'unclick'}</div>
        </div>
    )
}

export default withRouter(Button)