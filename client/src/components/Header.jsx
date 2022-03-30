import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='row'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/songs">Songs</Link>
    </div>
  )
}

export default Header