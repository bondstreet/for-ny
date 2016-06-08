
import React from 'react'
import classnames from 'classnames'

const Heading = ({
    level = 2,
    size,
    mega,
    center,
    caps,
    className,
    ...props
}) => {
    const Comp = `h${level}`
    let h
    if (!mega) {
        const n = (typeof size === 'number' ? size : level)
        h = `h${n + 2} sm-h${n + 1}` // `md-h${n}`
    } else {
        h = 'h2 md-h0 lg-h00'
    }

    const cx = classnames('Heading', h, {
        center,
        caps
    }, className)

    return <Comp {...props} className={cx} />
}

export default Heading

