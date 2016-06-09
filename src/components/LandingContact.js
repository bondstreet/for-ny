
import React from 'react'
import { Container, Text } from 'rebass'
import Scroll from 'react-scroll'
import Heading from './Heading'
import LeadForm from './LeadForm'
import { setFormSubmittedCookie } from '../modal-triggers'

const LandingContact = (props) => {
    return (
        <Scroll.Element
            name='contact'
            id='contact'
            className='min-height-100 table col-12 px3 py4 white bg-black'>
            <div className='table-cell col-12 center align-middle'>
                <Container
                    py={3}
                    style={{
                        maxWidth: 640
                    }}>
                    <LeadForm instanceName='fornyc__landing_contact'/>
                </Container>
            </div>
        </Scroll.Element>
    )
}

export default LandingContact

