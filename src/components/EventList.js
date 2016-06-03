
import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import month from 'month'
import Container from './Container'
import Heading from './Heading'
import EventCard from './EventCard'

const EventList = (props, { data }) => {
    const {
        landing: {
            eventList
        }
    } = data

    const getMonth = function(eventDetails) {
        const eventDate = moment(eventDetails.date, ['YYYY-MM-DD', 'MM-DD-YYYY'])
        return eventDate.month();
    };

    const getDay = function(eventDetails) {
        const eventDate = moment(eventDetails.date, ['YYYY-MM-DD', 'MM-DD-YYYY'])
        return eventDate.date();
    };

    const sortedEvents = _.chain(data.events.eventList)
        .sortBy(getMonth, getDay)
        .groupBy(getMonth)
        .toPairs()
        .sortBy(_.head)
        .value()

    return (
        <section className='bg-orange px2 py4'>
            <Container>
                <Heading center
                    caps
                    size={0}
                    className='mb3'
                    children={eventList.heading} />
                {sortedEvents.map((eventsByMonth, i) => {
                    const monthName = month(eventsByMonth[0])
                    const events = eventsByMonth[1]
                    return (
                        <div>
                            <Heading caps
                                size={1}
                                className='mb3'
                                key={'month' + i}
                                children={monthName} />
                            {events.map((event, i) => {
                                return (
                                    <EventCard
                                        key={'event' + i}
                                        {...event} />
                                )
                            })}
                        </div>
                    )
                })}
            </Container>
        </section>
    )
}

EventList.contextTypes = {
    data: React.PropTypes.object
}

export default EventList

