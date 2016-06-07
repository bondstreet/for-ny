
import React from 'react'
import { Text } from 'rebass'

const LargeText = (props) => {
    const sx = {
        fontSize: 48
    }

    return <Text style={sx} {...props} />
}

export default LargeText

