import React, { useState, useEffect } from 'react'
import axios from 'axios'
const url = 'https://course-api.com/react-store-products'
export default function FirstRequest() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    const resp = await axios.get(url)
    const data = resp.data
    setData(data)
  }
  useEffect(() => {
    fetchData()
  }, [data])
  if (data.length === 0) {
    return <h1>Loading...</h1>
  } else {
    return (
      <main>
        <h1 style={{ textAlign: 'center' }}>Get Request </h1>
        <section>
          {data.map((item) => {
            return (
              <div className='app__cardItem' key={item.id}>
                <div className='img-container'>
                  <img src={item.img} alt='' />
                </div>
                <h2>
                  <b>Name: </b>
                  {item.name}
                </h2>
                <h3>Company: {item.company}</h3>
                <h4>Price: {item.price}</h4>
              </div>
            )
          })}
        </section>
      </main>
    )
  }
}
