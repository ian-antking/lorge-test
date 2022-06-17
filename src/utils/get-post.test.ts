import getPost from './get-post'

describe('getPost', () => {
  it('returns a post with the correct id', async () => {
    const post = {
      id: 'id',
      title: 'title',
      published: new Date(Date.now()).toISOString(),
      blurb: 'blurbText',
      author: 'authorText',
      content: 'content'
    }

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ post })
      })
    ) as jest.Mock

    const result = await getPost('id')

    expect(result).toEqual(post)
  })
})
