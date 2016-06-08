
import React from 'react'
import { Container, Button } from 'rebass'
import Scroll from 'react-scroll'
import Heading from './Heading'
import Text from './Text'
import ValuePropsTable from './ValuePropsTable'
import AboutLogos from './AboutLogos'

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
            className='table col-12 min-height-100 px3 py4 bg-white'>
            <div className='table-cell col-12 align-middle'>
                <Container
                    py={3}
                    style={{
                        maxWidth: 768
                    }}>
                    <div className='center'>
                        <Heading
                            size={2}
                            className='mb3'
                            children={about.heading} />
                    </div>
                    <Text
                        size={4}
                        className='mb4 center'
                        dangerouslySetInnerHTML={{ __html: about.text }}
                    />
                    <ValuePropsTable />
                    <div className='center mt4'>
                        <Text
                            size={4}
                            mb={3}
                            children={about.subhead} />
                        <AboutLogos />
                        <Button
                            is={Scroll.Link}
                            smooth={true}
                            duration={200}
                            offset={-64}
                            to='contact'
                            mt={2}
                            color='white'
                            backgroundColor='black'
                            children={about.aboutButton} />
                    </div>
                </Container>
            </div>
        </Scroll.Element>
    )
}

LandingAbout.contextTypes = {
    data: React.PropTypes.object
}

export default LandingAbout

