
import React from 'react'
import Link from './Link'
import Heading from './Heading'

const Logo = ({ to, size = 3 }) => {
    const Comp = to ? Link : 'div'

    const sx = {
        display: 'inline-block',
        verticalAlign: 'middle',
        color: 'inherit',
        textDecoration: 'none'
    }

    return (
        <Comp to={to} style={sx}>
            <Heading className='tk-nimbus-sans-extended nowrap'
                level={1}
                size={size}
                center
                caps>
                For New York
            </Heading>
        </Comp>
    )
}

export default Logo

