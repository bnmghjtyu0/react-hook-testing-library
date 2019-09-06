import React from 'react'
import { render, fireEvent } from '@testing-library/react'
const { toMatchDiffSnapshot } = require('snapshot-diff');
import Button from '../index'


// getByLabelText             取 label 的文字re文字
// getByPlaceholderText       取 placeholder 的文字，回傳文字
// getByText(/about/i)        取文字 使用正規，回傳文字
// getByAltText               取 alt 的文字，回傳文字
// ByTitle                    取 <title/> 文字 下面兩種都可以
// ByDisplayValue
// ByRole
// ByTestId 常用              取 <button data-testid="toggle"></button> 回傳 tree
                             //  toggle = getByTestId('toggle')
                             //  toggle.textContent


describe('Button', () => {
    it('Queries', () => {
        const { container, getByText, getByLabelText, getByPlaceholderText, getByAltText, getByDisplayValue, getByTestId } = render(<Button />)

        // const inputNode = getByLabelText('username')

        // const inputNode = getByPlaceholderText('Username')

        // const aboutAnchorNode = getByText(/about/i)

        // const deleteElement = getByTitle('Delete')
        // console.log(deleteElement)

        const toggle = getByTestId('btn-toggle')
        console.log(toggle.textContent)

    })
})