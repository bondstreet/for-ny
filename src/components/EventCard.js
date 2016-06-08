
import React from 'react'
import moment from 'moment'
import Heading from './Heading'
import Text from './Text'

const EventCard = ({ ...props }) => {
    return (
        <div className='md-flex mb4' style={{ alignItems: 'flex-start' }}>
            <Heading
                className='mr2 center'
                style={{
                    border: '3px solid',
                    flexShrink: 0,
                    flexBasis: 128
                }}>
                <Text caps>{moment(props.month, 'MM').format('MMM')}</Text>
                <span style={{ letterSpacing: 0 }}>{props.day}</span>
            </Heading>
            <div className='flex-auto'>
                <Text caps>{props.title}</Text>
                <Text>{props.location}</Text>
                {props.blurb && <Text style={{ lineHeight: 1.25 }}>{props.blurb}</Text>}
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

