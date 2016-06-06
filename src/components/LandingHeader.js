
import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Text from './Text'
import Button from './Button'

const LandingHeader = (props, { data }) => {
    const sx = {
        root: {
            minHeight: '80vh',
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
        <header className='table col-12 px3 py4 bg-green'
            style={sx.root}>
            <div className='table-cell align-middle center'>
                <Container>
                    <Heading size={0} children={heading} />
                    <Text center bold size={1} children={text} />
                    <Button
                        href='#!'
                        children={headerButton} />
                </Container>
            </div>
        </header>
    )
}

LandingHeader.contextTypes = {
    data: React.PropTypes.object
}

export default LandingHeader

