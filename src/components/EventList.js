
import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import Scroll from 'react-scroll'
import { Container, Button } from 'rebass'
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
        <Scroll.Element
            name='events'
            id='events'
            className='min-height-100 bg-orange px2 py4'>
            <Container>
                <div className='center'>
                    <Heading center
                        caps
                        size={0}
                        className='mb3'
                        children={eventList.heading} />
                </div>
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
                <div className='center xs-hide'>
                    <Button
                        is={Scroll.Link}
                        smooth={true}
                        duration={200}
                        offset={-64}
                        to='about'
                        mt={3}
                        color='white'
                        backgroundColor='black'
                        children='About' />
                </div>
            </Container>
        </Scroll.Element>
    )
}

EventList.contextTypes = {
    data: React.PropTypes.object
}

export default EventList

