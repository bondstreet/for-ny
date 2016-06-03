
import React from 'react'
import classnames from 'classnames'
import Link from './Link'

const NavItem = ({
    href,
    to,
    caps = true,
    className,
    ...props
}) => {
    const Comp = href
        ? 'a'
        : to
            ? Link
            : 'span'

    const cx = classnames(
        'NavItem',
        'h5',
        'bold',
        'nowrap',
        'px2',
        'py1',
        'color-inherit',
        'text-decoration-none',
        { caps },
        className
    )

    return (
        <Comp {...props}
            to={to}
            href={href}
            className={cx} />
    )
}

export default NavItem

