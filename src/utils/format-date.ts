const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const nth = (day: number): string => {
  if (day > 3 && day < 21) return 'th'
  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

export default (isoString: string): string => {
  const date = new Date(isoString)
  const day = date.getDate()

  const formattedDate = `${day}${nth(day)} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`

  return formattedDate
}
