
import React from 'react'
import Link from './Link'
import classnames from 'classnames'

const paths = {
    facebook: 'M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0',
    twitter:  'M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z',
    close: 'M1 0 L0 1 L7 8 L0 15 L1 16 L8 9 L15 16 L16 15 L9 8 L16 1 L15 0 L8 7 z'
}

const Icon = ({
    name = 'facebook',
    to,
    href,
    size = 24,
    className,
    ...props
}) => {
    const Comp = href
        ? 'a'
        : to
        ? Link
        : 'div'

    const sx = {
        root: {
            fontSize: size,
            width: size,
            height: size,
            display: 'inline-block',
            verticalAlign: 'middle',
            color: 'inherit',
            textDecoration: 'none'
        },
        svg: {
            display: 'inline-block',
            width: '1em',
            height: '1em',
            fill: 'currentcolor'
        }
    }

    const cx = classnames('Icon', className)

    return (
        <Comp
            {...props}
            to={to}
            href={href}
            className={cx}
            style={sx.root}>
            <svg viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
                style={sx}>
                <path d={paths[name]} />
            </svg>
        </Comp>
    )
}

export default Icon

