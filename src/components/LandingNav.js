
import React from 'react'
import Scroll from 'react-scroll'
import classnames from 'classnames'
import NavItem from './NavItem'

class LandingNav extends React.Component {
    constructor () {
        super()
        this.state = {
            currentSection: null
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount () {
        Scroll.scrollSpy.addSpyHandler(this.handleScroll)
        // Scroll.Events.scrollEvent.register('end', this.handleScroll)
    }

    componentWillUnmount () {
    }

    handleScroll (y) {
        const currentSection = Scroll.scroller.getActiveLink()
        this.setState({ currentSection })
    }

    render () {
        const { currentSection } = this.state
        const colors = {
            header: 'bg-mint',
            stories: 'bg-peach',
            events: 'bg-orange',
            about: 'bg-yellow',
            contact: 'white bg-black'
        }
        const colorClass = currentSection ? colors[currentSection] : colors.header

        const cx = classnames(
            'LandingNav',
            'center',
            'sm-fixed',
            'top-0 right-0 left-0 z2',
            'py1',
            colorClass
        )

        return (
            <nav className={cx}>
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

