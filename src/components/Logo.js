
import React from 'react'
import classnames from 'classnames'
import Link from './Link'
import Heading from './Heading'

const Logo = ({ to, medium, mega, ...props }) => {
    const Comp = to ? Link : 'div'

    const sx = {
        display: 'inline-block',
        verticalAlign: 'middle',
        color: 'inherit',
        textDecoration: 'none'
    }

    const cx = {
        root: classnames('Logo', props.className),
        h1: classnames(
            'tk-nimbus-sans-extended',
            'nowrap',
            'center',
            'caps',
            {
                'h4': !mega && !medium,
                'h1': medium,
                'h2 sm-h1 md-h0 lg-h00': mega
            }
        )
    }

    return (
        <Comp to={to}
            {...props}
            style={sx}
            className={cx.root}>
            <h1 className={cx.h1}>
                For
                <br />
                New York
            </h1>
        </Comp>
    )
}

export default Logo

