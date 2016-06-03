
import React from 'react'
import Link from './Link'
import Heading from './Heading'

const PostCard = ({
    to,
    image,
    title,
    ...props
}) => {
    return (
        <div>
            <Link to={to}
                className='block color-inherit text-decoration-none'>
                <img src={image}
                    className='fit mb1' />
                <Heading
                    center
                    level={3}
                    size={2}
                    children={title} />
            </Link>
        </div>
    )
}

export default PostCard

