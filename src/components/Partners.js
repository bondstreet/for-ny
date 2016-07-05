
import React from 'react'
import Heading from './Heading'

const Partners = ({}, { data }) => {
    const logos = data.landing.partnerLogos

    return (
        <section className='px2 py4 bg-gray'>
            <Heading center>
                Our Partners
            </Heading>
            <div className='center mx-auto max-width-4'>
                {logos.map(({ src, alt, width = 128 }, i) => (
                    <img key={i}
                        src={data.baseurl + src}
                        width={width}
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

