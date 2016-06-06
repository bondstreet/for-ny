
import React from 'react'
import Scroll from 'react-scroll'
import Container from './Container'
import Heading from './Heading'
import Text from './Text'

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
            className='min-height-100 px3 py4 bg-green'>
            <Heading center
                caps
                size={0}
                className='mb3'
                children={about.heading} />
            <Text
                size={3}
                children={about.text} />
            <pre>Form FPO</pre>
        </Scroll.Element>
    )
}

LandingAbout.contextTypes = {
    data: React.PropTypes.object
}

export default LandingAbout

