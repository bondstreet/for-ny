
import React from 'react'
import LandingNav from './LandingNav'
import LandingHeader from './LandingHeader'
import LandingIntro from './LandingIntro'
import LandingPosts from './LandingPosts'
import SocialPromo from './SocialPromo'
// import EventList from './EventList'
import LandingAbout from './LandingAbout'
import Footer from './Footer'

const Index = (props, { data }) => {
  return (
    <div>
      <LandingNav />
      <LandingHeader />
      <LandingIntro />
      <LandingPosts />
      <SocialPromo />
      <pre>EventList FPO</pre>
      <LandingAbout />
      <Footer />
    </div>
  )
}

Index.contextTypes = {
  data: React.PropTypes.object
}

export default Index

