
import React from 'react'
import Scroll from 'react-scroll'
import { ButtonOutline } from 'rebass'
import classnames from 'classnames'
import NavItem from './NavItem'
import Logo from './Logo'
import FacebookShareButton from './social-buttons/FacebookShareButton'

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
            intro: 'bg-mint',
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
            'xs-absolute',
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
                    children='Home' />
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
                <div className='inline-block align-middle xs-hide sm-hide' style={sx.logo}>
                    <Logo />
                </div>
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
                <div className='nav-share-button nowrap inline-block align-middle mx2 my1'>
                    <FacebookShareButton
                        url='https://bondstreet.com/fornewyork'
                        isNav={true} />
                </div>
            </nav>
        )
    }
}

export default LandingNav

