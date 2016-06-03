
import React from 'react'
import classnames from 'classnames'

const Heading = ({
    level = 2,
    size,
    ...props
}) => {
    const Comp = `h${level}`
    const h = 'h' + (typeof size === 'number' ? size : level)
    const cx = classnames('Heading', h)

    return <Comp {...props} className={cx} />
}

export default Heading

