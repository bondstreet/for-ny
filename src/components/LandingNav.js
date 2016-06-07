
import React from 'react'
import NavItem from './NavItem'

const LandingNav = () => {
    return (
        <nav className='LandingNav sm-fixed top-0 right-0 left-0 z2 center px2 py1 bg-white'>
            <NavItem to='stories'
                href='#stories'
                scroll
                offset={-64}
                children='Stories' />
            <NavItem to='events'
                href='#events'
                scroll
                offset={-64}
                children='Events' />
            <NavItem
                to='about'
                href='#about'
                scroll
                offset={-64}
                children='About' />
            <NavItem to='contact'
                href='#contact'
                scroll
                offset={-64}
                children='Contact' />
        </nav>
    )
}

export default LandingNav

