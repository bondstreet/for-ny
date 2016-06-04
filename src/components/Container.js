
import React from 'react'
import classnames from 'classnames'

const Container =({
    maxWidth = 896,
    className,
    ...props
}) => {
    const sx = {
        maxWidth
    }

    const cx = classnames('Container', 'mx-auto', className)

    return (
        <div {...props}
            style={sx}
            className={cx} />
    )
}

export default Container

