
import React from 'react'
import rebassConfig from './rebass-config'
import LeadModal from './LeadModal'
import { initInactiveTrigger, initTimeoutTrigger, modalSeen, setModalSeenCookie } from '../modal-triggers'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            modalOpen: false
        }

        this.closeModal = this.closeModal.bind(this)
        this.launchModal = this.launchModal.bind(this)
    }


    getChildContext () {
        return {
            rebass: rebassConfig,
            modal: {
                open: this.state.modalOpen,
                closeModal: this.closeModal
            }
        }
    }

    componentDidMount() {
        initInactiveTrigger(this.launchModal)
        initTimeoutTrigger(this.launchModal)
    }

    launchModal () {
        if (!modalSeen()) {
            this.setState({modalOpen: true})
            setModalSeenCookie()
        }
    }

    closeModal () {
        this.setState({modalOpen: false})
    }

    render () {
        return (
            <div>
                {this.props.children}
                <LeadModal />
            </div>

        )
    }
}

App.childContextTypes = {
    rebass: React.PropTypes.object,
    modal: React.PropTypes.object
}

App.contextTypes = {
    data: React.PropTypes.object
}

export default App
