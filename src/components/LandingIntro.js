
import React from 'react'
import Container from './Container'
import Text from './Text'

const LandingIntro = (props, { data }) => {
    const {
        landing: {
            introSection
        }
    } = data

    return (
        <section className='bg-yellow px2 py4'>
            <Container>
                <Text bold center size={4}
                    dangerouslySetInnerHTML={{ __html:introSection.text }}
                >
                </Text>
            </Container>
        </section>
    )
}

LandingIntro.contextTypes = {
    data: React.PropTypes.object
}

export default LandingIntro

