
import React from 'react'
import Scroll from 'react-scroll'
import { Button, Heading } from 'rebass'
import Container from './Container'
import Logo from './Logo'
import AboutLogos from './AboutLogos'
import Text from './Text'

const PaidLandingIntro = (props, { data, modal }) => {
    const { intro } = data.paidLanding
    const { openModal } = modal

    return (
        <Scroll.Element
            name='fornewyork'
            id='fornewyork'
            className='min-height-100 table col-12 px2 py4'>
            <section className='table-cell align-middle center'>
                <Container>
                    <Logo mega className='mb3'/>
                    <p className='bold h3 md-h2 mb3'
                        dangerouslySetInnerHTML={{ __html: intro.subHeading }} />
                    <Text className='mb3'
                            children={intro.logoHeading} />
                    <AboutLogos />
                    <div className='xs-hide'>
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

