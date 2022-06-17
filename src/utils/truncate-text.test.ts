import truncateText from './truncate-text'

describe('truncateText', () => {
  it('reduces text length to 300 characters plus an ellipsis', () => {
    const text: string = 'a'.repeat(400)

    const expected: string = 'a'.repeat(300) + '...'

    const actual: string = truncateText(text)

    expect(actual).toBe(expected)
  })

  it('does not change strings less than 300 characters in length', () => {
    const text: string = 'a'.repeat(200)

    const actual: string = truncateText(text)

    expect(actual).toBe(text)
  })
})
