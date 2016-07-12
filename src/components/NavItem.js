
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
    small,
    className,
    children,
    ...props
}) => {
    let Comp = 'div'
    if (!disabled && to) {
        Comp = Link
    } else if (!disabled && href) {
        Comp = 'a'
    }

    const cx = {
        root: classnames(
            'NavItem',
            'h6',
            'bold',
            'nowrap',
            'inline-block',
            'align-middle',
            'mx2',
            'md-my1',
            'color-inherit',
            'text-decoration-none',
            {
                caps,
                disabled,
                'md-h5': !small
            },
            className
        ),
        inner: classnames(
            'inline-block',
            'align-middle', {
                'xs-hide': !!icon
            }
        ),
        icon: classnames({
            mr2: !right,
            ml2: right,
        })
    }

    const sx = {
        root: {
            paddingTop: 4,
            paddingBottom: 4,
            borderBottomWidth: 4,
            borderBottomStyle: 'solid',
            borderBottomColor: 'transparent'
        }
    }

    return (
        <Comp {...props}
            to={to}
            href={href}
            style={sx.root}
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

