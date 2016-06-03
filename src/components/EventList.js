
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
        return parseInt(convertDate(eventDetails.date).month()) + 1
    };

    const getDay = function(eventDetails) {
        return convertDate(eventDetails.date).date()
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
                    const monthName = moment(eventsByMonth[0]).format('MMMM')
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

