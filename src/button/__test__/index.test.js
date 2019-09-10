import React from 'react'
import { Link, Route, Router, Switch, MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
const { toMatchDiffSnapshot } = require('snapshot-diff');
import Button from '../index'

function renderWithRouter(
    ui,
    {
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] }),
    } = {}) {
    return {
        ...render(<Router history={history}>{ui}</Router>),
        // adding `history` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        history,
    }
}
describe('Button', () => {
    it('adf', () => {
        const { container, debug, getByTestId, asFragment } = renderWithRouter(<Button />)
        // console.log(debug())
        const btnToggle = getByTestId('btn-toggle')
        const content = getByTestId('content')

        fireEvent.click(btnToggle)
        expect(content.textContent).toBe('clicked')

    })
})