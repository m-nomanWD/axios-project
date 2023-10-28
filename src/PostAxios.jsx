import React from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

export default function PostAxios() {
  const url = 'https://course-api.com/axios-tutorial-post'
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const handlSubmit = async (e) => {
    e.preventDefault()
    console.log(email, name)
    var loadingToast
    try {
      loadingToast = toast.loading('Submiting Data')
      const resp = await axios.post(url, { name, email })
      console.log(resp)
      setName('')
      setEmail('')
      if (resp.statusText === 'Created') {
        toast.dismiss(loadingToast)
        toast.success(
          `User Created:
        Name: ${resp.data.user.name}
        Email: ${resp.data.user.email}`,
          {
            duration: 6000,
          }
        )
      }
    } catch (error) {
      toast.dismiss(loadingToast)
      toast.error(error.response.data.msg)
    }
  }
  return (
    <section>
      <Toaster />
      <h1>Post Request </h1>
      <form action=''>
        <h2>Axios Form</h2>
        <div className='input-container'>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </div>

        <button className='btn' type='button' onClick={handlSubmit}>
          Submit
        </button>
      </form>
    </section>
  )
}
