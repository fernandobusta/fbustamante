import ReactMarkdown from 'react-markdown'

export default function MarkdownRenderer({ markdownText, className }) {
  if (!markdownText) return null

  return (
    // You can apply a wrapper class for styling if neede
    <div className={className}>
      <ReactMarkdown>{markdownText}</ReactMarkdown>
    </div>
  )
}
