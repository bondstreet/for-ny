
import React from 'react'
import { Container, Button } from 'rebass'
import Scroll from 'react-scroll'
import Heading from './Heading'
import Text from './Text'
import ValuePropsTable from './ValuePropsTable'
import AboutLogos from './AboutLogos'

const SemHeader = (props, { data }) => {
    const { sem } = data.landing

    return (
        <Scroll.Element
            name='top'
            id='top'
            className='table col-12 min-height-100 px3 py4 bg-mint'>
            <div className='table-cell col-12 align-middle'>
                <Container
                    py={3}
                    style={{
                        maxWidth: 768
                    }}>
                    <div className='center'>
                        <Heading
                            className='mb3'
                            children={sem.about.heading} />
                    </div>
                    <Text center
                        className='mb4'
                        dangerouslySetInnerHTML={{ __html: sem.about.subHeading }}
                    />
                    <div className='center'>
                        <Button
                                mt={3}
                                color='white'
                                backgroundColor='black'
                                children='Learn More' />
                    </div>
                    <ValuePropsTable />
                </Container>
            </div>
        </Scroll.Element>
    )
}

SemHeader.contextTypes = {
    data: React.PropTypes.object
}

export default SemHeader

