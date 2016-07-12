
import React from 'react'
import Heading from './Heading'
import Text from './Text'

const Partners = ({}, { data }) => {
    const logos = data.landing.partnerLogos

    return (
        <section className='px2 py4 bg-gray'>
            <Heading center>
                Our Partners
            </Heading>
            <Text center className='mb2'>
                We’re proud to share our support of independent businesses with the following brands.
            </Text>
            <div className='center mx-auto'>
                {logos.map(({ src, alt, width = 128, style }, i) => (
                    <img key={i}
                        src={data.baseurl + src}
                        width={width}
                        style={style}
                        className='inline-block align-middle m2'
                        alt={alt} />
                ))}
            </div>
        </section>
    )
}

Partners.contextTypes = {
    data: React.PropTypes.object
}

export default Partners

