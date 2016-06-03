
import React from 'react'
import Heading from './Heading'

const SocialPromo = (props, {
    data: {
        landing: {
            socialPromo
        }
    }
}) => {
    return (
        <section className='px3 py2 bg-orange'>
            <Heading
                children={socialPromo.heading} />
            <button>Facebook</button>
            <button>Twitter</button>
        </section>
    )
}

SocialPromo.contextTypes = {
    data: React.PropTypes.object
}

export default SocialPromo

