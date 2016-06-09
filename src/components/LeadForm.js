
import React from 'react'
import Heading from './Heading'
import Text from './Text'
import InterestedPrompt from './InterestedPrompt'
import CheckOrSchedule from './CheckOrSchedule'
import LeadCapture from './LeadCapture'
import Schedule from './Schedule'
import LikeUs from './LikeUs'
import { setFormSubmittedCookie } from '../modal-triggers'


class LeadForm extends React.Component {
    constructor(props) {
        super()
        this.state = {
            view: 'likeUs',
            business_name: '',
            name: '',
            email: '',
            phone_number: '',
            customerio_event: '',
            sf_lead_status: ''
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

        const { onComplete } = this.props
        const payload = {
            lead_form_instance: this.props.instanceName,
            customerio_event: this.state.customerio_event,
            sf_lead_status: this.state.sf_lead_status,
            company: this.state.business_name,
            full_name: this.state.name,
            email: this.state.email,
            phone: this.state.phone_number
        }

        this.createLead(payload).then(() => {
            this.setState({view: 'schedule'})
            setFormSubmittedCookie()
            onComplete()
        })
    }

    onReadyToSchedule () {
        this.setState({
            customerio_event: 'fornyc__ready_to_schedule',
            view: 'lead'
        })
    }

    onNotReadyToSchedule () {
        this.setState({
            customerio_event: 'fornyc__not_ready_to_schedule',
            sf_lead_status: 'Wants to stay in touch',
            view: 'lead'
        })
    }

    componentDidMount() {
        const { submitted } = this.context.leadForm
        const leadCapture = require('bondstreet_web/assets/js/lib/lead-capture')

        if (!submitted) { this.setState({view: 'interested'}) }

        this.createLead = leadCapture.createLead
    }

    render () {
        const { view } = this.state
        const { leadForm } = this.context.data
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
            <div id={'bst_lead_form__'+this.props.instanceName} className="center">
                <Heading small className='mb2'>
                    {heading}
                </Heading>
                {text && (
                    <Text className='mb2' children={text} />
                )}
                {views[view]}
            </div>
        )
    }
}

LeadForm.propTypes = {
    instanceName: React.PropTypes.string.isRequired,
    onComplete: React.PropTypes.func
}

LeadForm.defaultProps = {
  onComplete: () => {}
}

LeadForm.contextTypes = {
  data: React.PropTypes.object,
  leadForm: React.PropTypes.object
}

export default LeadForm
