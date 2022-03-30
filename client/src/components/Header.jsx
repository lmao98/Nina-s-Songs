import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav className='row center'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/songs">Songs</Link>
    </nav>
  )
}

export default Header