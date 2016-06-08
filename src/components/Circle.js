
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
            width: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            padding: 32,
            textAlign: 'center'
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

