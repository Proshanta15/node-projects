import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../style/header.css'


const Navbar = () => {
  return (
    <>
      <nav>
        <div>
            <NavLink to='/'>App</NavLink>
        </div>
        <div>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/service'>Service</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink to='/register'>Register</NavLink>
                </li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
