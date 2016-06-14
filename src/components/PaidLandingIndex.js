
import React from 'react'
import LandingAbout from './LandingAbout'
import PaidLandingContact from './PaidLandingContact'
import Footer from './Footer'
import Logo from './Logo'
import PaidLandingHeader from './PaidLandingHeader'
import PaidLandingIntro from './PaidLandingIntro'
import PaidLandingNav from './PaidLandingNav'
import LandingPosts from './LandingPosts'
import PaidLandingEvents from './PaidLandingEvents'

class PaidLandingIndex extends React.Component {
    render () {
        return (
            <div>
                <PaidLandingNav />
                <PaidLandingHeader />
                <PaidLandingIntro />
                <LandingPosts />
                <PaidLandingEvents />
                <PaidLandingContact />
                <Footer />
            </div>
        )
    }
}

export default PaidLandingIndex

