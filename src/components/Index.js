
import React from 'react'
import LandingNav from './LandingNav'
import LandingHeader from './LandingHeader'
import LandingIntro from './LandingIntro'
import LandingPosts from './LandingPosts'
import SocialPromo from './SocialPromo'
import EventList from './EventList'
import LandingAbout from './LandingAbout'
import LandingContact from './LandingContact'
import Footer from './Footer'

class Index extends React.Component {
    constructor(props) {
        super()
        this.state = {
            leadFormView: 'interested'
        };
    }

    changeLeadFormView() {
        this.setState({ leadFormView: 'checkOrSchedule' })
    }

    render() {
        return (
            <div>
                <LandingNav />
                <LandingHeader />
                <LandingPosts />
                <EventList />
                <LandingAbout
                    changeLeadFormView={this.changeLeadFormView.bind(this)} />
                <LandingContact
                    initialView={this.state.leadFormView} />
                <Footer />
            </div>
        )
    }
}

Index.contextTypes = {
  data: React.PropTypes.object
}

export default Index

