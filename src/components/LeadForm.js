import React from 'react'
import InterestedPrompt from './InterestedPrompt'
import CheckOrSchedule from './CheckOrSchedule'
import LeadCapture from './LeadCapture'
import Schedule from './Schedule'
import LikeUs from './LikeUs'
import { setModalSeenCookie } from '../modal-triggers'



class LeadForm extends React.Component {

    constructor(props) {
        super()


        this.state = {
            view: 'interested',
            business_name: '',
            name: '',
            email: '',
            phone_number: '',
            segment_name: ''
        }

        this.setView = this.setView.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleLeadSubmit = this.handleLeadSubmit.bind(this)
        this.onReadyToSchedule = this.onReadyToSchedule.bind(this)
        this.onNotReadyToSchedule = this.onNotReadyToSchedule.bind(this)
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
            instance_name: this.props.instanceName,
            segment_name: this.state.segment_name,
            company: this.state.business_name,
            full_name: this.state.name,
            email: this.state.email,
            phone: this.state.phone_number
        }


        this.createLead(payload).then(() => {
            this.setView('schedule')
            setModalSeenCookie(365)
        })
    }

    onReadyToSchedule () {
        this.setState({
            segment_name: 'fornyc__ready_to_schedule',
            view: 'lead'
        })
    }

    onNotReadyToSchedule () {
        this.setState({
            segment_name: 'fornyc__not_ready_to_schedule',
            view: 'lead'
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
                    onNotReadyClick={this.onNotReadyToSchedule}
                    onAccept={this.onReadyToSchedule}
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
                {views[view]}
            </div>
        )
    }
}

LeadForm.defaultProps = {
    instanceName: 'default_instance'
}

LeadForm.contextTypes = {
  data: React.PropTypes.object
}

export default LeadForm
