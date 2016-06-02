
import React from 'react'
import Heading from './Heading'
import Text from './Text'
import Button from './Button'

const LandingHeader = (props, { data }) => {
    const sx = {
        root: {
            minHeight: '80vh'
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
        <header className='table col-12 px3 py4 bg-gray'
            style={sx.root}>
            <div className='table-cell align-middle center'>
                <Heading children={heading} />
                <Text children={text} />
                <Button
                    href='#!'
                    children={headerButton} />
            </div>
        </header>
    )
}

LandingHeader.contextTypes = {
    data: React.PropTypes.object
}

export default LandingHeader

