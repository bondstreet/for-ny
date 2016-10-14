
import React from 'react'

const PostHeroImage = ({
    src,
    caption,
    sizes,
    title,
    ...props
}, { data }) => {

    // Remove checks when all images are on S3
    const reg = new RegExp('^' + data.bucketUrl)
    const isS3 = reg.test(src)
    const mainSrc = isS3 ? src.replace(/\.jpg$/, '_w1280.jpg') : data.baseurl + src
    const srcset = []

    if (isS3) {
        sizes.forEach(s => {
            const url = src.replace(/\.jpg$/, `_w${s}.jpg`)
            srcset.push(`${url} ${s * 1.5}w`)
        })
    }

    return (
        <figure {...props}>
            <img
                alt={title}
                src={mainSrc}
                srcSet={srcset.join()}
                className='fit col-12 mb1' />
            {caption && (
                <figcaption className='h5 right-align'>
                    {caption}
                </figcaption>
            )}
        </figure>
    )
}

PostHeroImage.defaultProps = {
    sizes: [
        320,
        640,
        1280,
        // 2560
    ]
}

PostHeroImage.contextTypes = {
    data: React.PropTypes.object
}

export default PostHeroImage

