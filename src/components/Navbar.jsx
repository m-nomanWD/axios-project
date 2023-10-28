import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar-conatainer'>
      <div className='nav-center'>
        <div className='logo'>
          <span>
            Axios <b className='spacial'> Project</b>
          </span>
        </div>
        <ul>
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
            <li>InterSaptor</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
