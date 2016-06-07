
import React from 'react'
import classnames from 'classnames'

const LargeText = ({ className, ...props }) => {
    const cx = classnames('bold line-height-2 h3 sm-h2', className)

    return <p className={cx} {...props} />
}

export default LargeText

