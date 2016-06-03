
import React from 'react'
import classnames from 'classnames'

const Text = ({
    size = 4,
    center,
    caps,
    bold,
    className,
    ...props
}) => {
    const cx = classnames('Text', `h${size}`, {
        center,
        caps,
        bold
    }, className)

    return (
        <p {...props}
            className={cx} />
    )
}

Text.propTypes = {
    size: React.PropTypes.oneOf([
        0, 1, 2, 3, 4, 5, 6
    ])
}

export default Text

