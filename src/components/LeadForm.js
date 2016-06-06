
import React from 'react'
import { Heading, Text } from 'rebass'
import InterestedPrompt from './InterestedPrompt'
import CheckOrSchedule from './CheckOrSchedule'
import LeadCapture from './LeadCapture'
import Schedule from './Schedule'
import LikeUs from './LikeUs'

class LeadForm extends React.Component {
    constructor() {
        super()
        this.state = {
            view: 'interested',
            business_name: '',
            name: '',
            email: '',
            phone_number: ''
        }

        this.setView = this.setView.bind(this)
        this.handleLeadSubmit = this.handleLeadSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    setView (view) {
        return (e) => {
            this.setState({ view })
        }
    }

    handleChange (e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleLeadSubmit (e) {
        e.preventDefault()
        const payload = {
            company: this.state.business_name,
            full_name: this.state.name,
            email: this.state.email,
            phone: this.state.phone_number
        }

        this.createLead(payload).then(() => {
            this.setView('schedule')
        })
    }

    componentDidMount() {
        const leadCapture = require('bondstreet_web/assets/js/lib/lead-capture')
        this.createLead = leadCapture.createLead
        this.createNewsletterSub = leadCapture.createNewsletterSub
        this.setTakeoverCookie = leadCapture.setTakeoverCookie
    }

    render () {
        const { view } = this.state
        const { data: { leadForm } } = this.context
        const viewData = leadForm.views[view] || {}
        const heading = viewData.heading
        const text = viewData.text

        const views = {
            interested: (
                <InterestedPrompt
                    onDecline={this.setView('likeUs')}
                    onAccept={this.setView('checkOrSchedule')}/>
            ),
            checkOrSchedule: (
                <CheckOrSchedule
                    onAccept={this.setView('lead')}
                    {...this.state}/>
            ),
            lead: (
                <LeadCapture
                    {...this.state}
                    onSubmit={this.handleLeadSubmit}
                    onChange={this.handleChange}
                    />
            ),
            schedule: (
                <Schedule {...this.state} />
            ),
            likeUs: (
                <LikeUs {...this.state} />
            )
        }

        return (
            <div className="center">
                <Heading mb={2}>
                    {heading}
                </Heading>
                {text && (
                    <Text mb={2} children={text} />
                )}
                {views[view]}
            </div>
        )
    }
}

LeadForm.contextTypes = {
  data: React.PropTypes.object
}

export default LeadForm
