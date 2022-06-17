import { fireEvent, render } from '@testing-library/react'
import {
  MemoryRouter,
  unstable_HistoryRouter as HistoryRouter
} from 'react-router-dom'
import { createMemoryHistory } from 'history'
import PostCard from './PostCard'

import '@testing-library/jest-dom'

describe('PostCard', () => {
  it('renders the post title', () => {
    const { getByText } = render(
      <PostCard
        id="id"
        title="titleText"
        author="authorText"
        published={new Date(Date.now()).toISOString()}
        blurb="blurbText"
      />,
      { wrapper: MemoryRouter }
    )

    expect(getByText('titleText')).toBeTruthy()
  })

  it('renders the post author', () => {
    const { getByText } = render(
      <PostCard
        id="id"
        title="titleText"
        author="authorText"
        published={new Date(Date.now()).toISOString()}
        blurb="blurbText"
      />,
      { wrapper: MemoryRouter }
    )

    expect(getByText('authorText')).toBeInTheDocument()
  })

  it('renders the post blurb', () => {
    const { getByText } = render(
      <PostCard
        id="id"
        title="titleText"
        author="authorText"
        published={new Date(Date.now()).toISOString()}
        blurb="blurbText"
      />,
      { wrapper: MemoryRouter }
    )

    expect(getByText('blurbText')).toBeInTheDocument()
  })

  it('renders the post published date in the correct format', () => {
    const date = '2022-04-16T21:06:02.979Z'
    const { getByText } = render(
      <PostCard
        id="id"
        title="titleText"
        author="authorText"
        published={date}
        blurb="blurbText"
      />,
      { wrapper: MemoryRouter }
    )

    expect(getByText('16th April 2022')).toBeInTheDocument()
  })

  it('updates history when clicked', () => {
    const history = createMemoryHistory({
      initialEntries: ['/']
    })

    const { getByText } = render(
      <HistoryRouter history={history}>
        <PostCard
          id="id"
          title="titleText"
          author="authorText"
          published={new Date(Date.now()).toISOString()}
          blurb="blurbText"
        />
      </HistoryRouter>
    )

    fireEvent.click(getByText('titleText'))

    expect(history.location.pathname).toBe('/post/id')
  })

  it('renders consistently', () => {
    const { asFragment } = render(
      <PostCard
        id="id"
        title="titleText"
        author="authorText"
        published={new Date(Date.now()).toISOString()}
        blurb="blurbText"
      />,
      { wrapper: MemoryRouter }
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
