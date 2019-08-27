### react-hook 測試 toggle

```jsx
// button.test.js

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
const { toMatchDiffSnapshot } = require('snapshot-diff');
import Button from '../index'

describe('Button', () => {
    it('adf', () => {
        const { container, debug, getByTestId, asFragment } = render(<Button />)
        // console.log(debug())
        const btnToggle = getByTestId('btn-toggle')
        const content = getByTestId('content')

        fireEvent.click(btnToggle)
        expect(content.textContent).toBe('clicked')

    })
})
```
```jsx
// button.js

import React, { useState } from 'react'
const Button = () => {
    const [isClick, setIsClick] = useState(false)
    const toggle = () => {
        setIsClick(!isClick)
    }
    return (
        <div>
            <button data-testid="btn-toggle" onClick={toggle}>按鈕</button>
            <div data-testid="content">{isClick ? 'clicked' : 'unclick'}</div>
        </div>
    )
}

export default Button
```