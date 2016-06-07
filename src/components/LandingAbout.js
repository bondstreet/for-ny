
import React from 'react'
import { Container} from 'rebass'
import Scroll from 'react-scroll'
import Heading from './Heading'
import Text from './Text'
import ValuePropsTable from './ValuePropsTable'

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
                            caps
                            size={1}
                            className='mb3'
                            children={about.heading} />
                    </div>
                    <Text
                        size={3}
                        className='mb4'
                        children={about.text} />
                    <ValuePropsTable />
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

