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
      <article>
        <h2>Global Instances in Axios:</h2>
        <p>
          Global instances in Axios refer to the default Axios client or
          instances created at the top level of your application. Key
          characteristics of global instances include:
        </p>
      </article>
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
      <article>
        <h2>Default Settings:</h2>
        <p>
          The global instance represents the default Axios client. It's
          typically used for making requests that do not require specialized
          configurations. Any settings applied to the global instance will
          affect all requests made with it.
        </p>
      </article>
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
