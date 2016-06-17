
import React from 'react'
import { Container, Button } from 'rebass'
import Scroll from 'react-scroll'
import Heading from './Heading'
import Text from './Text'
import Logo from './Logo'
import AboutLogos from './AboutLogos'

const LandingAboutAlt = (props, { data }) => {
    const {
        heading,
        text,
        subhead,
        buttonHeading,
        aboutButton,
        logos
    } = data.landing.about

    return (
        <Scroll.Element
            name='about'
            id='about'
            className='table col-12 min-height-100 px3 py4 bg-white'>
            <div className='table-cell col-12 align-middle'>
                <Container
                    py={3}
                    style={{
                        maxWidth: 768
                    }}>
                    <div className='center mb4'>
                        <Logo medium />
                        <Text center
                            children='x'
                        />
                        <Logo medium />
                    </div>
                    <Text center
                        className='mb4'
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                </Container>
                <div className='center'>
                    <Text className='mb3'
                        children={subhead} />
                    <AboutLogos logos={logos} />
                    <Text className='mb3'
                        children={buttonHeading} />
                    <div className='xs-hide'>
                        <Button
                            is={Scroll.Link}
                            smooth={true}
                            duration={200}
                            offset={-64}
                            to='contact'
                            mt={2}
                            color='white'
                            backgroundColor='black'
                            children={aboutButton} />
                    </div>
                </div>
            </div>
        </Scroll.Element>
    )
}

LandingAboutAlt.contextTypes = {
    data: React.PropTypes.object
}

export default LandingAboutAlt

