
import React from 'react'
import Testimonial from './Testimonial'


const TestimonialsList = (props, { data }) => {
    const { testimonials } = data.paidLanding

    console.log(testimonials)

    const testimonialCards = testimonials.map((testimonial, i) => {
        const alignRight = (i % 2) ? true : false
        return <Testimonial alignRight={alignRight} {...testimonial} />
    })


    return (
        <div className='mxn2'>
            {testimonialCards}
        </div>
    )
}

TestimonialsList.contextTypes = {
  data: React.PropTypes.object
}

export default TestimonialsList

