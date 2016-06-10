
import React from 'react'
import LandingAbout from './LandingAbout'
import LandingContact from './LandingContact'
import Footer from './Footer'
import Logo from './Logo'

class About extends React.Component {
    render () {
        return (
            <div>
                {/* TO DO: Replace this with generic header from post archive */}
                <header className='center p2'>
                    <Logo to='/' />
                </header>
                <LandingAbout />
                <LandingContact />
                <Footer />
            </div>
        )
    }
}

export default About

