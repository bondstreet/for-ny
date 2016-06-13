
import React from 'react'
import Scroll from 'react-scroll'
import { Button, Heading } from 'rebass'
import Container from './Container'
import Logo from './Logo'
import AboutLogos from './AboutLogos'
import Text from './Text'

const SemIntro = (props, { data }) => {
    const { intro } = data.paidLanding

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
                            is={Scroll.Link}
                            smooth={true}
                            duration={200}
                            offset={-64}
                            to='stories'
                            mt={3}
                            color='white'
                            backgroundColor='black'
                            children='Stories' />
                    </div>
                </Container>
            </section>
        </Scroll.Element>
    )
}

SemIntro.contextTypes = {
    data: React.PropTypes.object
}

export default SemIntro

