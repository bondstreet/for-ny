
import React from 'react'
import { Link } from 'react-router'

const BaseLink = ({ to, ...props }, { data }) => {
    const baseTo = data.baseurl + to
    return <Link to={baseTo} {...props} />
}

BaseLink.contextTypes = {
    data: React.PropTypes.object
}

export default BaseLink

