export default (text: string): string => {
  let truncatedText: string = text.substring(0, 300)

  if (text.length > 300) {
    truncatedText += '...'
  }

  return truncatedText
}
