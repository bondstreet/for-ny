
import React from 'react'

const AboutLogos = (props, { data }) => {
    const { logos } = data.landing.about

    return (
        <div className='sm-table table-fixed col-12 mb3 mt3'>
            {logos.map(({ src, alt }, i) => (
                <div key={i}
                    className='sm-table-cell center mb1 p2 align-middle' style={{
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

