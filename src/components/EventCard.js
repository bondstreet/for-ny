
import React from 'react'

const EventCard = ({ ...props }) => {
    return (
        <div className='md-flex items-start items-center'>
            <div className='h0 mr4 bold'>{props.day}</div>
            <div className='flex-auto'>
                <span className='h3 bold caps'>{props.title}</span><br />
                <div>{props.location}</div>
                {props.blurb && <div>{props.blurb}</div>}
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

