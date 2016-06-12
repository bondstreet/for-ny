
import React from 'react'
import LandingNav from './LandingNav'
import LandingHeader from './LandingHeader'
import LandingIntro from './LandingIntro'
import LandingQuote from './LandingQuote'
import LandingPosts from './LandingPosts'
import SocialPromo from './SocialPromo'
import EventList from './EventList'
import LandingAboutAlt from './LandingAboutAlt'
import LandingContact from './LandingContact'
import Footer from './Footer'

const Index = (props, { data }) => {
    return (
        <div>
            <LandingNav />
            <LandingHeader />
            <LandingQuote />
            <LandingPosts />
            <EventList />
            <LandingAboutAlt />
            <LandingContact fullHeight />
            <Footer />
        </div>
    )
}

Index.contextTypes = {
  data: React.PropTypes.object
}

export default Index

