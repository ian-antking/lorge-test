import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

interface Props {
  language?: string
}

const CodeBlock: React.FC<Props> = ({ language, ...props }) => {
  return <SyntaxHighlighter language={language} style={dracula} {...props} />
}

export default CodeBlock
