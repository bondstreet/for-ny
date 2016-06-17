
import React from 'react'
import classnames from 'classnames'
import Link from './Link'
import Heading from './Heading'

const BstLogo = ({ to, ...props }) => {
    const Comp = to ? Link : 'div'

    const sx = {
        display: 'inline-block',
        width: '400px',
        height: '43px',
        textIndent: '-99999px',
        backgroundImage: 'url("/fornewyork/images/logos/bondstreet.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
    }

    return (
        <Comp to={to}
            {...props}>
            <h1 style={sx}>
                Bond Street
            </h1>
        </Comp>
    )
}

export default BstLogo

