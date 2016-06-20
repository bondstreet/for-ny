
import React from 'react'
import { Container, Button } from 'rebass'
import Scroll from 'react-scroll'
import Heading from './Heading'
import Text from './Text'
import AboutBranding from './AboutBranding'
import AboutLogos from './AboutLogos'

const LandingAbout = ({...props}, { data }) => {
    const {
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
                        <AboutBranding />
                    </div>
                    <Text center
                        className='mb3'
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                    <div className='center mb3'>
                        <Button
                            onClick={props.changeLeadFormView}
                            is={Scroll.Link}
                            smooth={true}
                            duration={200}
                            offset={-64}
                            to='contact'
                            color='white'
                            backgroundColor='black'
                            children={aboutButton} />
                    </div>
                </Container>
                <div className='center'>
                    <Text className='mb3'
                        children={subhead} />
                    <AboutLogos logos={logos} />
                </div>
            </div>
        </Scroll.Element>
    )
}

LandingAbout.contextTypes = {
    data: React.PropTypes.object
}

export default LandingAbout

