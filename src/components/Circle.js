
import React from 'react'

const Circle = ({ children, ...props }) => {
    const sx = {
        root: {
            position: 'relative',
            width: '100%',
            height: 0,
            paddingBottom: '100%',
            borderRadius: 99999
        },
        inner: {
            position: 'absolute',
            top: '50%',
            padding: 32,
            transform: 'translateY(-50%)'
        }
    }

    return (
        <div {...props} style={sx.root}>
            <div style={sx.inner}>
                {children}
            </div>
        </div>
    )
}

export default Circle

