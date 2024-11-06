import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    
  return (
   <div>

      <ul className='w-full gap-5 bg-slate-600 flex'>
        <li>
        <Link to={"/"}>Home</Link>
        </li>
        <li>
        <Link to={`/contact`}>Contact</Link>
        </li>
        <li>
        <Link to={'/about'} >About</Link>
        </li>
      </ul>

    </div>
  )
}

export default Navbar
