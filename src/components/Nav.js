
import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <nav>
      <Link to='/' children='Home' />
      <Link to='/posts' children='Posts' />
      <Link to='/about' children='About' />
    </nav>
  )
}

export default Nav

