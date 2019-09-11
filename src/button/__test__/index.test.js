import React from 'react'
import { render, fireEvent } from '@testing-library/react'
const { toMatchDiffSnapshot } = require('snapshot-diff');
import Button from '../index'

describe('Button', () => {
    it('text', () => {
        const { container, debug, getByTestId, queryAllByText, getAllByText } = render(<Button />)
        // console.log(debug())
        // 只能取得一個元素
        // 如果太多會出現 Found multiple elements by: [data-testid="toggle"]
        expect(queryAllByText('按鈕')).toHaveLength(1)
    })
})