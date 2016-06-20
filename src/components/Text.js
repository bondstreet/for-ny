
import React from 'react'
import classnames from 'classnames'

const Text = ({
    bold,
    center,
    caps,
    className,
    ...props
}) => {
    const cx = classnames('Text', {
        bold,
        center,
        caps
    }, className)

    return (
        <p {...props}
            className={cx} />
    )
}

export default Text

