import listPosts from './list-posts'

describe('listPosts', () => {
  it('returns a list of posts', async () => {
    const posts = [
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
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ posts })
      })
    ) as jest.Mock

    const result = await listPosts()

    expect(result).toEqual(posts)
  })

  it('throws an error if response not ok', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve()
      })
    ) as jest.Mock

    await expect(listPosts()).rejects.toThrow()
  })
})
