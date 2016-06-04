
import React from 'react'
import Link from './Link'
import Heading from './Heading'

const Logo = ({ to, size }) => {
    const Comp = to ? Link : 'div'

    const sx = {
        display: 'inline-block',
        verticalAlign: 'middle',
        color: 'inherit',
        textDecoration: 'none'
    }

    return (
        <Comp style={sx}>
            <Heading level={1} size={size} center caps>
                For
                <br />
                <span className='nowrap'>
                    New York
                </span>
            </Heading>
        </Comp>
    )
}

export default Logo

