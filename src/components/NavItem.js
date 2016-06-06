
import React from 'react'
import classnames from 'classnames'
import Link from './Link'
import Icon from './Icon'

const NavItem = ({
    href,
    to,
    caps = true,
    disabled,
    icon,
    right,
    className,
    children,
    ...props
}) => {
    let Comp = 'div'
    if (!disabled && href) {
        Comp = 'a'
    } else if (!disabled && to) {
        Comp = Link
    }

    const cx = {
        root: classnames(
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
        ),
        inner: classnames(
            'inline-block',
            'align-middle',
        ),
        icon: classnames({
            mr2: !right,
            ml2: right,
        })
    }

    return (
        <Comp {...props}
            to={to}
            href={href}
            className={cx.root}>
            {icon && !right && (
                <Icon name={icon} className={cx.icon} />
            )}
            <span className={cx.inner}>
                {children}
            </span>
            {icon && right && (
                <Icon name={icon} className={cx.icon} />
            )}
        </Comp>
    )
}

export default NavItem

