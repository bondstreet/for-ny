
import React from 'react'

import LeadForm from './LeadForm'
import LandingNav from './LandingNav'
import LandingHeader from './LandingHeader'
import LandingIntro from './LandingIntro'
import LandingPosts from './LandingPosts'
import SocialPromo from './SocialPromo'
import EventList from './EventList'
import LandingAbout from './LandingAbout'
import LeadModal from './LeadModal'
import Footer from './Footer'

const Index = (props, { data }) => {
  return (
    <div>
      <LandingNav />
      <LandingHeader />
      <LandingIntro />
      <LandingPosts />
      <SocialPromo />
      <EventList />
      <LandingAbout />
      <LeadForm />
      <Footer />
      <LeadModal />
    </div>
  )
}

Index.contextTypes = {
  data: React.PropTypes.object
}

export default Index

