
import React from 'react'
import moment from 'moment'
import Heading from './Heading'
import Text from './Text'

const EventCard = ({ ...props }) => {

    const crossOutPastEvent = function(id) {
        var canvas = document.getElementById(id)
        var context = canvas.getContext('2d')
        context.beginPath()
        context.moveTo(0, 0)
        context.lineTo(canvas.width, canvas.height)
        context.moveTo(canvas.width, 0)
        context.lineTo(0, canvas.height)
        context.lineWidth = 4
        context.stroke()
    }

    if (props.isPastEvent) {
        crossOutPastEvent('event' + props.date)
    }

    return (
        <div className='md-flex mb4' style={{ alignItems: 'flex-start' }}>
            <Heading
                className='mr2 center'
                style={{
                    position: 'relative',
                    border: '3px solid',
                    flexShrink: 0,
                    flexBasis: 128,
                }}>
                <Text caps>{moment(props.month, 'MM').format('MMM')}</Text>
                <span style={{ letterSpacing: 0 }}>{props.day}</span>
                {props.isPastEvent && (
                    <canvas
                        id={'event' + props.date}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: '100%'
                        }}
                    ></canvas>
                )}
            </Heading>
            <div className='flex-auto'>
                <Text caps>{props.title}</Text>
                {props.location && (
                    <Text>{props.location}</Text>
                )}
                {props.blurb && <Text style={{ lineHeight: 1.25 }} className='mt1'>{props.blurb}</Text>}
            </div>
            <div className='ml3'
                style={{ flexBasis: 128 }}>
                {(props.link && !props.isPastEvent) && (
                    <a href={props.link} className='h3 bold color-inherit caps'>RSVP</a>
                )}
            </div>
        </div>
    )
}

export default EventCard

