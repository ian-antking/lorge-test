import PostContent from './PostContent'
import { render, waitForElementToBeRemoved } from '@testing-library/react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { readFile } from 'fs/promises'

import '@testing-library/jest-dom'

interface Post {
  id: string
  title: string
  author: string
  blurb: string
  published: string
  content: string
}

describe('PostContent', () => {
  it('renders the markdown as plain text', async () => {
    const history = createMemoryHistory({
      initialEntries: ['/post/id1']
    })

    const content = `# title

    this is some content
    `

    const buffer: Buffer = Buffer.from(content, 'ascii')

    const data: Post = {
      id: 'id1',
      title: 'title',
      published: new Date(Date.now()).toISOString(),
      blurb: 'blurbText',
      author: 'authorText',
      content: buffer.toString('base64')
    }

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ post: data })
      })
    ) as jest.Mock

    const { findByText } = render(
      <HistoryRouter history={history}>
        <PostContent />
      </HistoryRouter>
    )

    expect(await findByText('title')).toBeInTheDocument()
    expect(await findByText('this is some content')).toBeInTheDocument()
  })

  it('renders consistently', async () => {
    const history = createMemoryHistory({
      initialEntries: ['/post/id1']
    })

    const content: string = await readFile(
      'src/components/test-data/article.md',
      'utf-8'
    )

    const buffer: Buffer = Buffer.from(content, 'ascii')

    const data: Post = {
      id: 'id1',
      title: 'title',
      published: new Date(Date.now()).toISOString(),
      blurb: 'blurbText',
      author: 'authorText',
      content: buffer.toString('base64')
    }

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ post: data })
      })
    ) as jest.Mock

    const { asFragment, findByText } = render(
      <HistoryRouter history={history}>
        <PostContent />
      </HistoryRouter>
    )

    waitForElementToBeRemoved(await findByText('Loading...'))

    expect(await findByText('title')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
