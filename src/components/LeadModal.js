
import React from 'react'
import { Overlay } from 'rebass'
import LeadForm from './LeadForm'


class LeadModal extends React.Component {
    render () {
        const {open, closeModal} = this.context.modal


        return (
            <Overlay
                id='lead-modal'
                onDismiss={closeModal}
                dark={false}
                open={open}
            >
                <section className='white bg-black px3 py4 max-width-2'>
                    <LeadForm instanceName='fornyc__modal'/>
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

