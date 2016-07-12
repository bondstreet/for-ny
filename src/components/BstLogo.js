
import React from 'react'
import classnames from 'classnames'
import Link from './Link'
import Heading from './Heading'

const BstLogo = ({ to, ...props }) => {
    const Comp = to ? Link : 'div'

    const sx = {
        width: '200px',
        height: '22px',
        textIndent: '-99999px',
        backgroundImage: 'url("/fornewyork/images/logos/bondstreet.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
    }

    return (
        <Comp
            className='inline-block'
            to={to}
            {...props}>
            <h1 style={sx}>
                Bond Street
            </h1>
        </Comp>
    )
}

export default BstLogo

