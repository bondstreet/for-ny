
import React from 'react'
import Scroll from 'react-scroll'
import { ButtonOutline } from 'rebass'
import classnames from 'classnames'
import NavItem from './NavItem'
import Logo from './Logo'
import LikeButton from './LikeButton'

class LandingNav extends React.Component {
    constructor () {
        super()
        this.state = {
            currentSection: 'top'
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount () {
        Scroll.scrollSpy.addSpyHandler(this.handleScroll)
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
            top: 'bg-mint',
            fornewyork: 'bg-white',
            stories: 'bg-peach',
            events: 'bg-orange',
            about: 'bg-yellow',
            contact: 'white bg-black'
        }
        const colorClass = currentSection ? colors[currentSection] : 'bg-mint'

        const showLogo = currentSection !== 'top'

        const cx = classnames(
            'LandingNav',
            'center',
            'md-fixed',
            'top-0 right-0 left-0 z2',
            'py1',
            colorClass
        )

        const sx = {
            logo: {
                display: 'inline-block',
                verticalAlign: 'middle',
                textAlign: 'center',
                width: showLogo ? 256 : 0,
                overflow: 'hidden'
            }
        }
        return (
            <nav className={cx}>
                <NavItem to='top'
                    href='#top'
                    scroll
                    offset={-64}
                    children='Bond Street' />
                <NavItem to='fornewyork'
                    href='#fornewyork'
                    scroll
                    offset={-64}
                    children='For New York' />
                <NavItem to='stories'
                    href='#stories'
                    scroll
                    offset={-64}
                    children='Stories' />
                <NavItem
                    to='events'
                    href='#events'
                    scroll
                    offset={-64}
                    children='Events' />
                <div className='nav-share-button nowrap inline-block align-middle mx2 my1'>
                </div>
            </nav>
        )
    }
}

export default LandingNav

