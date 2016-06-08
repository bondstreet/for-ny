
import React from 'react'
import Scroll from 'react-scroll'
import Container from './Container'
import Text from './Text'

const LandingIntro = (props, { data }) => {
    const { introSection } = data.landing

    return (
        <Scroll.Element
            name='intro'
            id='intro'
            className='min-height-100 table col-12 px2 py4'>
            <section className='table-cell align-middle'>
                <Container>
                    <Text bold center size={4}
                        dangerouslySetInnerHTML={{ __html:introSection.text }}
                    >
                    </Text>
                </Container>
            </section>
        </Scroll.Element>
    )
}

LandingIntro.contextTypes = {
    data: React.PropTypes.object
}

export default LandingIntro

