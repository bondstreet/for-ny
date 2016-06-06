
import React from 'react'

const Prose = ({ html }) => {
    return (
        <div
            className='Prose'
            dangerouslySetInnerHTML={{ __html: html }} />
    )
}

export default Prose

