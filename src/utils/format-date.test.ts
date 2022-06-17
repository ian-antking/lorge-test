import formatDate from './format-date'

describe('formatDate', () => {
  it('takes an iso date string and returns the correct format', () => {
    const dateString = '2022-04-16T21:06:02.979Z'

    expect(formatDate(dateString)).toBe('16th April 2022')
  })
})
