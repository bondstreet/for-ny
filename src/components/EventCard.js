
import React from 'react'
import Heading from './Heading'
import Text from './Text'

const EventCard = ({ ...props }) => {
    return (
        <div className='md-flex items-center'>
            <Heading size={0}
                className='mr2'
                style={{
                    minWidth: 128
                }}>
                {props.day}
            </Heading>
            <div className='flex-auto'>
                <Text caps>{props.title}</Text>
                <Text>{props.location}</Text>
                {props.blurb && <Text>{props.blurb}</Text>}
            </div>
            {props.link && (
                <div>
                    <a href={props.link} className='h3 bold color-inherit caps'>RSVP</a>
                </div>
            )}
        </div>
    )
}

export default EventCard

