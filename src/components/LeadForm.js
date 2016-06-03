import React from 'react'

import {
    InterestedPrompt,
    CheckOrSchedule,
    LeadCapture,
    Schedule
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

        console.log(this.state)
        //const { createLead } = this.props
        //
        //createLead(this.state).then(() => {
        //    this.setState({ view: 'apply' })
        //})
    }

    render () {
        const { view } = this.state

        const views = {
            interested: (
                <InterestedPrompt
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
