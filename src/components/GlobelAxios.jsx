import React from 'react'
import axios from 'axios'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function GlobelAxios() {
  const url1 = 'https://course-api.com/react-store-products'
  const url2 = 'https://randomuser.me/api'
  const globelInstance = async () => {
    try {
      const resp1 = await axios(url1)
      const resp2 = await axios(url2)
      console.log(resp1)
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    globelInstance()
  }, [])
  return (
    <div>
      <h1>Global Instance</h1>{' '}
      <div className='code-container'>
        <header className='code-topbar'>
          <span>Code Promet </span> <span>globel.js</span>
        </header>
        <SyntaxHighlighter
          className='code-prompt'
          language='javascript'
          style={atomDark}
        >
          {`import axios from 'axios'
axios.defaults.headers.common['Accept'] = 'application/json'
`}
        </SyntaxHighlighter>
      </div>
      <div className='code-container'>
        <header className='code-topbar'>
          <span>Code Promet </span> <span>function</span>
        </header>
        <SyntaxHighlighter
          className='code-prompt'
          language='javascript'
          style={atomDark}
        >
          {` const url1 = 'https://course-api.com/react-store-products'
  const url2 = 'https://randomuser.me/api'
  const globelInstance = async () => {
    try {
      const resp1 = await axios(url1)
      const resp2 = await axios(url2)
      console.log(resp1)
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    globelInstance()
  }, [])'
`}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
