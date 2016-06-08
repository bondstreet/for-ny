
import React from 'react'
import sanitize from 'sanitize-html'
import Link from './Link'
import Heading from './Heading'
import Text from './Text'

const PostCard = ({
    name,
    image,
    title,
    ...props
}, { data }) => {
    const description = sanitize(props.description || '', { allowedTags: [] })

    return (
        <div>
            <Link to={`/posts/${name}`}
                className='block color-inherit text-decoration-none'>
                {image && (
                    <img src={data.baseurl + image}
                        className='fit mb1' />
                )}
                <Heading
                    center
                    level={3}
                    size={2}
                    children={title} />
                <div
                    className='bold center'
                    dangerouslySetInnerHTML={{ __html: description }} />
            </Link>
        </div>
    )
}

PostCard.contextTypes = {
    data: React.PropTypes.object
}

export default PostCard

