|key|描述|
| ---| --- |
| getByLabelText |取 label 的文字，回傳文字 |
| getByLabelText | 取 label 的文字，回傳文字 |
| getByPlaceholderText | 取 placeholder 的文字，回傳文字 |
| getByText(/about/i) | 取文字 使用正規，回傳文字 |
| getByAltText        | 取 alt 的文字，回傳文字 |
| ByTitle             | 取 `<title>文字</title>` 文字 or `<span title="文字"></span>`，回傳文字 |
| ByDisplayValue      |                                 |
| ByRole              |                                  |
| ByTestId 常用       | 取 `<button data-testid="toggle"></button>` 回傳 tree  |

範例

```jsx
// index.js

<button data-testid="btn-toggle">按鈕</button>
```

```jsx
// page.test.js
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from '../index'

it('',()=>{
    const {getByTestId} = render(<Button/>)
    const toggle = getByTestId('btn-toggle')
    expect(toggle.textContent).toBe('按鈕')
})
```

