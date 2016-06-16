
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

    // Remove checks when all images are on S3
    const reg = new RegExp('^' + data.bucketUrl)
    const isS3 = reg.test(image)
    const mainSrc = isS3 ? image.replace(/\.jpg$/, '_w640.jpg') : data.baseurl + image

    return (
        <div>
            <Link to={`/posts/${name}`}
                className='block color-inherit text-decoration-none'>
                {image && (
                    <div className='center'>
                        <img src={mainSrc}
                            className='fit mb1' />
                    </div>
                )}
                <Heading
                    center
                    level={3}
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
