
import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import Container from './Container'
import Heading from './Heading'
import EventCard from './EventCard'

const EventList = (props, { data }) => {
    const {
        landing: {
            eventList
        }
    } = data

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
                    const monthName = moment(eventsByMonth[0], 'MM').format('MMMM')
                    const events = eventsByMonth[1]
                    return (
                        <div key={'month' + i}
                            className='mb3'>
                            <Heading caps
                                size={1}
                                className='mb2'
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

