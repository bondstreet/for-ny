
import React from 'react'

const Button = ({ href, ...props }) => {
    const Comp = href ? 'a' : 'button'

    return (
        <Comp {...props}
            className='Button'
            href={href} />
    )
}

export default Button

