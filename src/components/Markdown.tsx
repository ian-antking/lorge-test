import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBlock'

interface Props {
  content: string
}

const Markdown: React.FC<Props> = ({ content = '' }) => {
  return (
    <ReactMarkdown
      components={{
        code: ({ node, ...props }) => {
          console.log(node)
          return <CodeBlock language="javascript" {...props} />
        }
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default Markdown
