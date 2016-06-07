
import React from 'react'
import { Container, Button } from 'rebass'
import Scroll from 'react-scroll'
import LargeText from './LargeText'
import Heading from './Heading'

const LandingHeader = (props, { rebass, data }) => {
    const sx = {
        root: {
            paddingTop: 64
        }
    }

    const {
        landing: {
            heading,
            text,
            headerButton
        }
    } = data

    return (
        <header className='min-height-100 table col-12 px3 py4 bg-mint'
            style={sx.root}>
            <div className='table-cell align-middle center'>
                <Heading caps mega className='tk-nimbus-sans-extended mb4' children='For' />
                <Container style={{ maxWidth: 640 }}>
                    <LargeText className='mb3' children={text} />
                    <Button
                        is={Scroll.Link}
                        smooth={true}
                        duration={200}
                        offset={-64}
                        to='stories'
                        mt={2}
                        color='mint'
                        backgroundColor='black'
                        children={headerButton} />
                </Container>
                <Heading caps mega className='tk-nimbus-sans-extended mt4' children='New York' />
            </div>
        </header>
    )
}

LandingHeader.contextTypes = {
    rebass: React.PropTypes.object,
    data: React.PropTypes.object
}

export default LandingHeader

