
import React from 'react'
import { Overlay } from 'rebass'
import LeadForm from './LeadForm'
import Cookies from 'js-cookie'

const INACTIVE_TRIGGER = 5000
const TIMEOUT_TRIGGER = 10000
const MODAL_SEEN_COOKIE = 'fornyc_modal_seen'
const MODAL_SEEN_EXPIRES = 1

class LeadModal extends React.Component {
    constructor() {
        super()

        this.state = {
            open: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.launchModal = this.launchModal.bind(this)
        this.initInactiveTrigger = this.initInactiveTrigger.bind(this)
    }

    handleClick (e) {
        this.setState({open: false})
    }

    componentDidMount() {
        this.initInactiveTrigger()
        setTimeout(function(){
            this.launchModal()
        }.bind(this), TIMEOUT_TRIGGER)
    }

    launchModal () {
        if (!this.modalSeen()) {
            this.setState({open: true})
            Cookies.set(MODAL_SEEN_COOKIE, '', { expires: MODAL_SEEN_EXPIRES })
        }
    }

    modalSeen () {
        const cookie_exists = Cookies.get(MODAL_SEEN_COOKIE) !== undefined
        const is_debug = /show_modal/.test(window.location.search)
        return cookie_exists && !is_debug
    }

    initInactiveTrigger () {
        const away = require('away')
        const timer = away(INACTIVE_TRIGGER)
        timer.on('idle', function() {
            this.launchModal()
        }.bind(this))
    }

    render () {
        const { open } = this.state

        return (
            <Overlay
                id='lead-modal'
                onDismiss={this.handleClick}
                open={open}
            >
                <section className='bg-white px2 py3 max-width-2'>
                    <LeadForm />
                </section>
            </Overlay>
        )
    }
}

LeadModal.contextTypes = {
    data: React.PropTypes.object
}

export default LeadModal

