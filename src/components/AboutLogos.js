
import React from 'react'

const AboutLogos = (props, { data }) => {
    const { logos } = data.landing.about

    return (
        <div className='center my3 mx-auto max-width-3'>
            {logos.map(({ src, alt }, i) => (
                <div key={i}
                    className='inline-block align-middle mb2 px2' style={{
                        filter: 'grayscale(100%)',
                        WebkitFilter: 'grayscale(100%)'
                    }}>
                    <img width="110" alt={alt} src={data.baseurl + src}/>
                </div>
            ))}
        </div>
    )
}

AboutLogos.contextTypes = {
    data: React.PropTypes.object
}

export default AboutLogos

