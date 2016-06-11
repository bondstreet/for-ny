
import React from 'react'
import LandingAbout from './LandingAbout'
import LandingContact from './LandingContact'
import Footer from './Footer'
import Logo from './Logo'
import SemHeader from './SemHeader'
import SemIntro from './SemIntro'
import SemNav from './SemNav'
import LandingPosts from './LandingPosts'
import EventList from './EventList'

class SemIndex extends React.Component {
    render () {
        return (
            <div>
                {/* TO DO: Replace this with generic header from post archive */}
                <SemNav />
                <SemHeader />
                <LandingContact />
                <SemIntro />
                <LandingPosts />
                <EventList />
                <Footer />
            </div>
        )
    }
}

export default SemIndex

