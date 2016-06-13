
import React from 'react'
import Testimonial from './Testimonial'


const TestimonialsList = (props, { data }) => {
    const { testimonials } = data.paidLanding

    console.log(testimonials)

    const testimonialCards = testimonials.map((testimonial, i) => (
        <Testimonial {...testimonial} />
    ))


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

