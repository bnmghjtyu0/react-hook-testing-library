import React, { useState } from 'react'
const Button = () => {
    const [isClick, setIsClick] = useState(false)

    return (
        <div>
            <button data-testid="toggle">按鈕</button>
            <button data-testid="toggle">按鈕</button>
            <label>my aria label</label>
        </div>
    )
}

export default Button