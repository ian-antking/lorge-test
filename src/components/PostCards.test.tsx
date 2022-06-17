import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PostCards from './PostCards'

import '@testing-library/jest-dom'

interface Post {
  id: string
  title: string
  author: string
  blurb: string
  published: string
}

describe('PostCards', () => {
  it('displays the correct number of PostCard elements', () => {
    const data: Post[] = [
      {
        id: 'id1',
        title: 'title1',
        published: new Date(Date.now()).toISOString(),
        blurb: 'blurbText1',
        author: 'authorText1'
      },
      {
        id: 'id2',
        title: 'title2',
        published: new Date(Date.now()).toISOString(),
        blurb: 'blurbText2',
        author: 'authorText2'
      }
    ]

    const { asFragment } = render(<PostCards posts={data} />, {
      wrapper: MemoryRouter
    })

    expect(asFragment().children[0].childNodes.length).toBe(2)
  })

  it('renders a message if there are no posts', () => {
    const { getByText } = render(<PostCards posts={[]} />, {
      wrapper: MemoryRouter
    })

    expect(getByText('Nothing Here')).toBeInTheDocument()
  })

  it('renders consistently', () => {
    const data: Post[] = [
      {
        id: 'id1',
        title: 'title1',
        published: '2022-04-18T18:11:54+0000',
        blurb: 'blurbText1',
        author: 'authorText1'
      },
      {
        id: 'id2',
        title: 'title2',
        published: '2022-04-18T18:11:54+0000',
        blurb: 'blurbText2',
        author: 'authorText2'
      }
    ]

    const { asFragment } = render(<PostCards posts={data} />, {
      wrapper: MemoryRouter
    })

    expect(asFragment()).toMatchSnapshot()
  })
})
