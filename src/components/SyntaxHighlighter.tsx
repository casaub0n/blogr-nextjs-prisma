import * as React from 'react'
import { Prism } from 'react-syntax-highlighter'
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism'

type Props = {
  codeString: string
  language: string
}

export const Component: React.VFC<Props> = ({codeString, language}) => {
  return (
    <Prism language={language} style={xonokai}>
      {codeString}
    </Prism>
  )
}

export { Component as SyntaxHighlighter }
