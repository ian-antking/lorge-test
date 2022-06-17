export default (encodedContent: string): string => {
  return atob(encodedContent)
}
