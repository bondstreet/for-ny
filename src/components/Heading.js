
import React from 'react'
import classnames from 'classnames'

const Heading = ({
    level = 2,
    size,
    center,
    caps,
    className,
    ...props
}) => {
    const Comp = `h${level}`
    const h = 'h' + (typeof size === 'number' ? size : level)
    const cx = classnames('Heading', h, {
        center,
        caps
    }, className)

    return <Comp {...props} className={cx} />
}

export default Heading

