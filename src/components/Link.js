
import React from 'react'
import { Link } from 'react-router'
import Scroll from 'react-scroll'

const BaseLink = ({
    to,
    scroll,
    ...props
}, { data }) => {
    const baseTo = scroll ? to : data.baseurl + to
    const Comp = scroll ? Scroll.Link : Link
    const scrollProps = scroll ? {
        spy: true,
        smooth: true,
        duration: 200,
        activeClass: 'white bg-black'
    } : {}

    return <Comp to={baseTo} {...props} {...scrollProps} />
}

BaseLink.propTypes = {
    to: React.PropTypes.string,
    scroll: React.PropTypes.bool
}

BaseLink.contextTypes = {
    data: React.PropTypes.object
}

export default BaseLink

