
import React from 'react'
import Scroll from 'react-scroll'
import { ButtonOutline, Button } from 'rebass'
import classnames from 'classnames'
import NavItem from './NavItem'
import Logo from './Logo'
import LikeButton from './LikeButton'

class PaidLandingNav extends React.Component {
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


    handleScroll (y) {
        const currentSection = Scroll.scroller.getActiveLink()
        this.setState({ currentSection })
    }

    render () {
        const { currentSection } = this.state
        const { openModal } = this.context.modal
        const colors = {
            top: 'bg-mint',
            community: 'bg-white',
            events: 'bg-orange',
            contact: 'white bg-black'
        }
        const colorClass = currentSection ? colors[currentSection] : 'bg-mint'

        const cx = classnames(
            'LandingNav',
            'center',
            'md-fixed',
            'top-0 right-0 left-0 z2',
            'py1',
            colorClass
        )

        return (
            <nav className={cx}>
                <NavItem to='top'
                    href='#top'
                    scroll
                    offset={-64}
                    children='Bond Street' />
                <NavItem to='community'
                    href='#community'
                    scroll
                    offset={-64}
                    children='Our Community' />
                <NavItem
                    to='events'
                    href='#events'
                    scroll
                    offset={-64}
                    children='Events' />
                <div className='nav-share-button nowrap inline-block align-middle mx2 my1'>
                    <Button
                        id='paid-nav-cta-button'
                        data-small
                        color='white'
                        backgroundColor='black'
                        children='Get Started'
                        onClick={openModal}
                    />
                </div>
            </nav>
        )
    }
}

PaidLandingNav.contextTypes = {
    modal: React.PropTypes.object
}

export default PaidLandingNav

