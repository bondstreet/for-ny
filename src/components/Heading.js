
import React from 'react'
import classnames from 'classnames'

const Heading = ({
    level = 2,
    mega,
    small,
    center,
    caps,
    className,
    ...props
}) => {
    const Comp = `h${level}`

    const cx = classnames('Heading', {
        'Heading-small': small,
        center,
        caps,
        'h2 md-h1 lg-h0': mega,
        'tk-nimbus-sans-extended': mega,
    }, className)

    return <Comp {...props} className={cx} />
}

export default Heading

