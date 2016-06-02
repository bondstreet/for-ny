
import React from 'react'

const Heading = ({
    level = 2,
    size,
    ...props
}) => {
    const Comp = `h${level}`

    return <Comp {...props} className='Heading' />
}

export default Heading

