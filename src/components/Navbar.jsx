import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [toggle, setToggle] = React.useState(false)
  return (
    <nav className='navbar-conatainer'>
      <div className='nav-center'>
        <div className='logo'>
          <span>
            Axios <b className='spacial'> Project</b>
          </span>
          <div className='toggle-container'>
            {toggle ? (
              <b className='minus' onClick={() => setToggle(false)}>
                -
              </b>
            ) : (
              <b onClick={() => setToggle(true)}>+</b>
            )}
          </div>
        </div>
        <ul className={toggle ? 'show-list' : 'hide-list'}>
          <Link className='link' to='/'>
            <li>Get List</li>
          </Link>
          <Link className='link' to='/dadjokes'>
            <li>Dad Joke</li>
          </Link>
          <Link className='link' to='/form'>
            <li>Form</li>
          </Link>
          <Link className='link' to='/globel'>
            <li>Global Instance</li>
          </Link>
          <Link className='link' to='/custom'>
            <li>Custom Instance</li>
          </Link>
          <Link className='link' to='/intersaptor'>
            <li>Interceptor</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
