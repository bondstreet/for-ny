
import React from 'react'
import NavItem from './NavItem'

const LandingNav = () => {
    const sx = {
        root: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 2
        }
    }

    return (
        <nav style={sx.root} className='LandingNav center px2 py2 bg-white'>
            <NavItem to='stories'
                href='#stories'
                scroll
                offset={-64}
                children='Stories' />
            <NavItem
                to='about'
                href='#about'
                scroll
                offset={-64}
                children='About' />
        </nav>
    )
}

export default LandingNav

