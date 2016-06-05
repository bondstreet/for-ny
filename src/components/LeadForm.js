import React from 'react'


import {
    InterestedPrompt,
    CheckOrSchedule,
    LeadCapture,
    Schedule,
    LikeUs
} from './lead-components'


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
            <div className="center m4">
                <h1>view wrapper</h1>
                {views[view]}
            </div>
        )
    }
}

LeadForm.contextTypes = {
  data: React.PropTypes.object
}

export default LeadForm
