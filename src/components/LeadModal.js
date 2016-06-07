
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
    data: React.PropTypes.object,
    modal: React.PropTypes.object
}

export default LeadModal

