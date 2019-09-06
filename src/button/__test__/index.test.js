import React from 'react'
import { render, fireEvent } from '@testing-library/react'
const { toMatchDiffSnapshot } = require('snapshot-diff');
import Button from '../index'

describe('Button', () => {
    it('Queries', () => {
        const { container, getByTestId } = render(<Button />)

        // const inputNode = getByLabelText('username')

        // const inputNode = getByPlaceholderText('Username')

        // const aboutAnchorNode = getByText(/about/i)

        // const deleteElement = getByTitle('Delete')
        // console.log(deleteElement)

        const toggle = getByTestId('btn-toggle')
        expect(toggle.textContent).toBe('按鈕')

    })
})