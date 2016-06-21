
import React from 'react'
import { Overlay, Close } from 'rebass'
import LeadForm from './LeadForm'


class LeadModal extends React.Component {
    constructor(props) {
        super()

        this.onComplete = this.onComplete.bind(this)
    }

    onComplete() {
        const {closeModal} = this.context.modal

        setTimeout(function(){
            closeModal()
        }, 2500)
    }

    render () {
        const {open, closeModal} = this.context.modal
        const initialView = this.props.location.pathname.endsWith('/p/') ? 'lead': 'interested'

        return (
            <Overlay
                id='lead-modal'
                onDismiss={closeModal}
                dark={false}
                open={open}
            >
                <section className='white bg-black px3 py4 max-width-2'>
                    <Close onClick={closeModal} style={{
                        top: '10px',
                        right: '14px',
                        cursor: 'pointer',
                        fontSize: '26px',
                        position: 'absolute'
                    }} />
                    <LeadForm instanceName='fornyc__modal' onComplete={this.onComplete} initialView={initialView} />
                </section>
            </Overlay>
        )
    }
}

LeadModal.contextTypes = {
    data: React.PropTypes.object,
    modal: React.PropTypes.object
}

export default LeadModal
