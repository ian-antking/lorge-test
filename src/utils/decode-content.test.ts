import decodeContent from './decode-content'

describe('decodeContent', () => {
  it('decodes a b64 encoded string, and returns the result', () => {
    const expected = 'test data'
    const encoded = 'dGVzdCBkYXRh'

    const actual: string = decodeContent(encoded)

    expect(actual).toBe(expected)
  })
})
