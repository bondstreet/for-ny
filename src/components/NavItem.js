
import React from 'react'
import classnames from 'classnames'
import Link from './Link'

const NavItem = ({
    href,
    to,
    caps = true,
    disabled,
    className,
    ...props
}) => {
    let Comp = 'div'
    if (!disabled && href) {
        Comp = 'a'
    } else if (!disabled && to) {
        Comp = Link
    }

    const cx = classnames(
        'NavItem',
        'h5',
        'bold',
        'nowrap',
        'inline-block',
        'align-middle',
        'px2',
        'py1',
        'color-inherit',
        'text-decoration-none',
        { caps, disabled },
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

