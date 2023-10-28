import React from 'react'
import authFetch from '../axios/intersaptor'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { promtCode, text } from '../data'
export default function IntersaptorAxios() {
  const { interceptText, requestText, responseText } = text
  const fetchInter = async () => {
    try {
      const resp1 = await authFetch('/react-store-products')
    } catch (error) {
      console.log(error)
    }
  }
  React.useEffect(() => {
    fetchInter()
  }, [])
  return (
    <div>
      <h1>Interceptors</h1>{' '}
      <article>
        <h2>{interceptText.title}</h2>
        <p>{interceptText.info}</p>
      </article>
      <article>
        <h2>{requestText.title}</h2>
        <p>{requestText.info}</p>
      </article>
      <div className='code-container'>
        <header className='code-topbar'>
          <span>Code Promet </span>
          <span>interceptor.js</span>
        </header>
        <SyntaxHighlighter
          className='code-prompt'
          language='javascript'
          style={atomDark}
        >
          {`${promtCode.requestCode}`}
        </SyntaxHighlighter>
      </div>
      <article>
        <h2>{responseText.title}</h2>
        <p>{responseText.info}</p>
      </article>
      <div className='code-container'>
        <header className='code-topbar'>
          <span>Code Promet </span>
          <span>interceptor.js</span>
        </header>
        <SyntaxHighlighter
          className='code-prompt'
          language='javascript'
          style={atomDark}
        >
          {`${promtCode.responseCode}`}
        </SyntaxHighlighter>
      </div>
      <div className='code-container'>
        <header className='code-topbar'>
          <span>Code Promet </span>
          <span>function</span>
        </header>
        <SyntaxHighlighter
          className='code-prompt'
          language='javascript'
          style={atomDark}
        >
          {` ${promtCode.interceptFun}`}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
