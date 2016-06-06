
import React from 'react'
import { Container, Heading, Text } from 'rebass'
import LeadForm from './LeadForm'
import Scroll from 'react-scroll'

const LandingAbout = (props, {
    data: {
        landing: {
            about
        }
    }
}) => {
    return (
        <Scroll.Element
            name='about'
            id='about'
            className='min-height-100 px3 py4 white bg-green'>
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
        </Scroll.Element>
    )
}

LandingAbout.contextTypes = {
    data: React.PropTypes.object
}

export default LandingAbout

