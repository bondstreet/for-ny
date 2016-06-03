
import React from 'react'

const Container =({
    maxWidth = 768,
    ...props
}) => {
    const sx = {
        maxWidth
    }

    return (
        <div {...props}
            style={sx}
            className='Container mx-auto' />
    )
}

export default Container

