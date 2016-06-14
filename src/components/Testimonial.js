
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
        avatar: classnames('col col-3 px2', {'col-right': props.alignRight}),
        body: classnames('col col-9', {
            'left-align': !props.alignRight,
            'col-right': props.alignRight,
            'right-align': props.alignRight
        })
    }

    return (
        <div className='clearfix my4'>
            <div className={cx.avatar}>
                {avatar && (
                    <img src={data.baseurl + avatar}
                        className='fit mb1' />
                )}
            </div>
            <div className={cx.body}>
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

Testimonial.propTypes = {
  alignRight: React.PropTypes.bool
}

export default Testimonial

