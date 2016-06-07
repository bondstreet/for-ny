
import React from 'react'
import { Container, Heading, Text } from 'rebass'
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
            className='table col-12 min-height-100 px3 py4 bg-yellow'>
            <div className='table-cell col-12 align-middle'>
                <Container
                    py={3}
                    style={{
                        maxWidth: 640
                    }}>
                    <div className='center'>
                        <Heading
                            caps
                            size={0}
                            mb={3}
                            children={about.heading} />
                    </div>
                    <Text
                        size={3}
                        mb={4}
                        children={about.text} />
                    <div className='center'>
                        <Heading
                            caps
                            size={2}
                            mb={3}
                            children={about.subhead} />
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

