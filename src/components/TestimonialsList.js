
import React from 'react'
import Testimonial from './Testimonial'


const TestimonialsList = (props, { data }) => {
    const { testimonials } = data.paidLanding

    const testimonialCards = testimonials.map((testimonial, i) => {
        const alignRight = (i % 2) ? true : false
        return <Testimonial key={i} alignRight={alignRight} {...testimonial} />
    })


    return (
        <div className='py4 mxn3'>
            {testimonialCards}
        </div>
    )
}

TestimonialsList.contextTypes = {
  data: React.PropTypes.object
}

export default TestimonialsList

