
import React from 'react'
import NavItem from './NavItem'

const LandingNav = () => {
    return (
        <nav className='LandingNav center px2 py2'>
            <NavItem href='#stories' children='Stories' />
            <NavItem href='#about' children='About' />
            <NavItem href='#learn' children='Learn' />
        </nav>
    )
}

export default LandingNav

