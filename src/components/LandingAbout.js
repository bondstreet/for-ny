
import React from 'react'
import { Container, Heading, Text } from 'rebass'
import LeadForm from './LeadForm'

const LandingAbout = (props, {
    data: {
        landing: {
            about
        }
    }
}) => {
    return (
        <section id='about'
            className='px3 py4 white bg-green'>
            <Container
                py={3}
                style={{
                    textAlign: 'center',
                    maxWidth: 640
                }}>
                <Heading
                    caps
                    size={0}
                    className='mb3'
                    children={about.heading} />
                <Text
                    size={3}
                    mb={4}
                    children={about.text} />
                <LeadForm />
            </Container>
        </section>
    )
}

LandingAbout.contextTypes = {
    data: React.PropTypes.object
}

export default LandingAbout

