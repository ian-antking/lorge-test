import { render, cleanup } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

import '@testing-library/jest-dom'

interface Post {
  id: string
  title: string
  author: string
  blurb: string
  published: string
  content?: string
}

describe('App', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders a message if there are no articles', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ posts: [] })
      })
    ) as jest.Mock

    const { findByText } = render(
      <Router>
        <App />
      </Router>
    )

    expect(await findByText('Nothing Here')).toBeInTheDocument()
  })

  it('renders the articles', async () => {
    const data: Post = {
      id: 'id1',
      title: 'title',
      published: new Date(Date.now()).toISOString(),
      blurb: 'blurbText',
      author: 'authorText'
    }

    global.fetch = jest.fn().mockReturnValueOnce(
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ posts: [data] })
      })
    ) as jest.Mock

    const { findByText } = render(
      <Router>
        <App />
      </Router>
    )

    expect(await findByText('title')).toBeInTheDocument()
  })
})
