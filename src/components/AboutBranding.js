
import React from 'react'
import BstLogo from './BstLogo'
import Logo from './Logo'
import Text from './Text'

const AboutBranding = ({ ...props }) => {
    return (
        <div className='md-flex inline-block items-center'
            style={{ justifyContent: 'center' }}>
            <BstLogo />
            <Text center
                className='ml2 mr2'
                children='x'
            />
            <Logo medium />
        </div>
    )
}

export default AboutBranding

