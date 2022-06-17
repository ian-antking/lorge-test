import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import {
  MemoryRouter,
  unstable_HistoryRouter as HistoryRouter
} from 'react-router-dom'
import Header from './Header'

import '@testing-library/jest-dom'

describe('Header', () => {
  it('renders the website name', () => {
    const { getByText } = render(<Header />, { wrapper: MemoryRouter })

    expect(getByText('lörge')).toBeInTheDocument()
  })

  it('updates history to home when clicked', () => {
    const history = createMemoryHistory({
      initialEntries: ['/not-home']
    })

    const { getByText } = render(
      <HistoryRouter history={history}>
        <Header />
      </HistoryRouter>
    )

    fireEvent.click(getByText('lörge'))

    expect(history.location.pathname).toBe('/')
  })

  it('renders consistently', () => {
    const { asFragment } = render(<Header />, { wrapper: MemoryRouter })

    expect(asFragment()).toMatchSnapshot()
  })
})
