
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
    const cx = {
        avatar: classnames('px3 mb2', {
            'sm-col': !props.alignRight,
            'sm-col-right': props.alignRight
        })
    }

    return (
        <div className='clearfix py4 max-width-3 mx-auto'>
            <div className={cx.avatar}>
                {avatar && (
                    <img src={data.baseurl + avatar}
                        alt={name}
                        width='192'
                        height='192'
                        className='fit circle' />
                )}
            </div>
            <div className='overflow-hidden px3'>
                <div className='table mb2'>
                    <div className='table-cell align-middle col-12'>
                        <h3 className='h2 line-height-1' children={name} />
                        <p className='sm-h3 bold' children={title} />
                    </div>
                    <div className='table-cell align-middle pl1'>
                        {logo && (
                            <img width='110'
                                alt='Company logo'
                                src={data.baseurl + logo}
                                style={{
                                    filter: 'grayscale(100%)',
                                    WebkitFilter: 'grayscale(100%)'
                                }}
                            />
                        )}
                    </div>
                </div>
                <blockquote>
                    <p dangerouslySetInnerHTML={{ __html: text }} />
                </blockquote>
            </div>
        </div>
    )
}

Testimonial.contextTypes = {
  data: React.PropTypes.object
}

Testimonial.propTypes = {
  alignRight: React.PropTypes.bool
}

export default Testimonial

