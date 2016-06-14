
import React from 'react'
import Scroll from 'react-scroll'
import { Button, Heading } from 'rebass'
import Container from './Container'
import Logo from './Logo'
import AboutLogos from './AboutLogos'
import Text from './Text'
import TestimonialsList from './TestimonialsList'

const PaidLandingIntro = (props, { data, modal }) => {
    const { intro } = data.paidLanding
    const { openModal } = modal

    return (
        <Scroll.Element
            name='community'
            id='community'
            className='min-height-100 table col-12 px2 py4'>
            <section className=''>
                <Container>
                    <p className='center bold h2 md-h2 mb3'
                        dangerouslySetInnerHTML={{ __html: intro.heading }} />
                    <TestimonialsList />
                    <Text center children={intro.logoHeading} />
                    <AboutLogos />
                    <div className='center xs-hide py4'>
                        <Text children={intro.ctaHeading} className="max-width-2 mx-auto"/>
                        <Button
                            id='paid-intro-cta-button'
                            mt={3}
                            color='white'
                            backgroundColor='black'
                            onClick={openModal}
                            children={intro.ctaButton} />
                    </div>
                </Container>
            </section>
        </Scroll.Element>
    )
}

PaidLandingIntro.contextTypes = {
    data: React.PropTypes.object,
    modal: React.PropTypes.object
}

export default PaidLandingIntro

