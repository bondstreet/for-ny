
import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import Scroll from 'react-scroll'
import { Container, Button } from 'rebass'
import Heading from './Heading'
import Text from './Text'
import EventCard from './EventCard'

const EventList = (props, { data }) => {
    const {
        heading,
        text
    } = data.paidLanding.eventList

    const convertDate = function(eventDate) {
        return moment(eventDate, ['YYYY-MM-DD', 'MM-DD-YYYY'])
    }

    const getMonth = function(eventDetails) {
        eventDetails.month = parseInt(convertDate(eventDetails.date).month()) + 1
        return eventDetails.month
    };

    const getDay = function(eventDetails) {
        eventDetails.day = convertDate(eventDetails.date).date()
        return eventDetails.day
    };

    const sortedEvents = _
        .chain(data.events.eventList)
        .sortBy(getMonth, getDay)
        .value()

    return (
        <Scroll.Element
            name='events'
            id='events'
            className='min-height-100 bg-orange px2 py4'>
            <Container>
                <div className='center'>
                    <Heading center
                        mega
                        caps
                        className='mb1'
                        children={heading} />
                    {text && (
                        <Text children={text} className='mb4' />
                    )}
                </div>
                {sortedEvents.map((event, i) => {
                    return (
                        <EventCard
                            key={'event' + i}
                            {...event} />
                    )
                })}
            </Container>
        </Scroll.Element>
    )
}

EventList.contextTypes = {
    data: React.PropTypes.object
}

export default EventList

