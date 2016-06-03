
import React from 'react'
import Link from './Link'
import Heading from './Heading'

const EventCard = ({ ...props }) => {
    return (
        <div>
            {props.title}<br />
            {props.location}<br />
            {props.blurb}<br />
            <a href="{props.link}">RSVP</a>
        </div>
    )
}

export default EventCard

