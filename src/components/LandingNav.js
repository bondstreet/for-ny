
import React from 'react'
import Scroll from 'react-scroll'
import NavItem from './NavItem'

class LandingNav extends React.Component {
    constructor () {
        super()
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount () {
        Scroll.Events.scrollEvent.register('end', this.handleScroll)
    }

    componentWillUnmount () {
        Scroll.Events.scrollEvent.remove('end')
    }

    handleScroll (to, element) {
        console.log('scroll', to, element)
    }

    render () {
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
}

export default LandingNav

