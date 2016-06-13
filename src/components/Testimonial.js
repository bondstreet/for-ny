
import React from 'react'
import classnames from 'classnames'
import Link from './Link'
import Heading from './Heading'

const Testimonial = ({
    name,
    avatar,
    title,
    logo,
    text,
    ...props
}, { data }) => {
    return (
        <div className='clearfix'>
            <div className='col col-4 mx2' style={{
                maxWidth: '150px'
            }}>
                {avatar && (
                    <img src={data.baseurl + avatar}
                        className='fit mb1' />
                )}
            </div>
            <div className='col col-8 left-align'>
                <div className='h3 mb1' children={name} />
                <div className='h4 mb1' children={title} />

                {logo && (
                    <img
                        style={{
                            width: '50px'
                        }}
                        src={data.baseurl + logo}
                        className='fit mb1' />
                )}
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    )
}

Testimonial.contextTypes = {
  data: React.PropTypes.object
}

export default Testimonial

