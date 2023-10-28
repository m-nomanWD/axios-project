import React, { useState } from 'react'
import axios from 'axios'
export default function DadJokes() {
  const [joke, setJoke] = useState(
    'Click on the Button to fetch joke from DadJokes API'
  )
  const url = 'https://icanhazdadjoke.com/'
  const handleJokes = async () => {
    const resp = await axios.get(url, {
      headers: {
        Accept: 'application/json',
      },
    })
    console.log(resp)
    const { data } = resp
    setJoke(data.joke)
  }
  return (
    <>
      <section>
        <h1>Request with headers</h1>
        <article className='app__dadJokes-container'>
          <h2>Dad Jokes</h2>
          <p>{joke}</p>
          <button
            style={{ marginTop: '0rem' }}
            className='btn'
            onClick={handleJokes}
          >
            Get Joke
          </button>
        </article>
      </section>
    </>
  )
}
