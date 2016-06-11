
import React from 'react'
import Scroll from 'react-scroll'
import { Button, Heading } from 'rebass'
import Container from './Container'
import Logo from './Logo'
import AboutLogos from './AboutLogos'
import Text from './Text'

const SemIntro = (props, { data }) => {
    const { introSection, sem, about } = data.landing

    return (
        <Scroll.Element
            name='fornewyork'
            id='fornewyork'
            className='min-height-100 table col-12 px2 py4'>
            <section className='table-cell align-middle center'>
                <Container>
                    <Logo mega className='mb3'/>
                    <p className='bold h3 md-h2 mb3'
                        dangerouslySetInnerHTML={{ __html:sem.introSubHeading }} />
                    <Text className='mb3'
                            children={about.subhead} />
                    <AboutLogos />
                    <p className='bold h3 md-h2'
                       dangerouslySetInnerHTML={{ __html:introSection.text }} />
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

