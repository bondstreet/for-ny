
import React from 'react'
import rebassConfig from './rebass-config'
import LeadModal from './LeadModal'
import {
    initInactiveTrigger,
    initTimeoutTrigger,
    initExitIntentTrigger,
    setModalSeenCookie,
    leadFormSubmitted,
    modalSeen
} from '../modal-triggers'

class App extends React.Component {
    constructor() {
        super()

        /* check the window location pathname */


        this.state = {
            modalOpen: false,
            leadFormSubmitted: false
        }

        this.closeModal = this.closeModal.bind(this)
        this.openModalIfNotSeen = this.openModalIfNotSeen.bind(this)
        this.openModal = this.openModal.bind(this)
    }


    getChildContext () {
        return {
            rebass: rebassConfig,
            modal: {
                open: this.state.modalOpen,
                closeModal: this.closeModal,
                openModal: this.openModal
            },
            leadForm: {
                submitted: this.state.leadFormSubmitted
            }
        }
    }

    componentDidMount() {
        initInactiveTrigger(this.openModalIfNotSeen)
        initTimeoutTrigger(this.openModalIfNotSeen)
        initExitIntentTrigger(this.openModalIfNotSeen)
        if (leadFormSubmitted()) {
            this.setState({leadFormSubmitted: true})
        }
    }

    openModalIfNotSeen () {
        if (!modalSeen()) {
            this.openModal()
        }
    }

    openModal () {
        this.setState({modalOpen: true})
        setModalSeenCookie()
    }

    closeModal () {
        this.setState({modalOpen: false})
    }

    render () {
        return (
            <div>
                {this.props.children}
                <LeadModal {...this.props} />
            </div>

        )
    }
}

App.childContextTypes = {
    rebass: React.PropTypes.object,
    modal: React.PropTypes.object,
    leadForm: React.PropTypes.object
}

App.contextTypes = {
    data: React.PropTypes.object
}

export default App
