
import React from 'react'
import classnames from 'classnames'

const NavItem = ({
    caps = true,
    className,
    ...props
}) => {
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
        <a {...props} className={cx} />
    )
}

export default NavItem

