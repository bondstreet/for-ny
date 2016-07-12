
import React from 'react'
import BstLogo from './BstLogo'
import Logo from './Logo'
import Text from './Text'

const AboutBranding = ({ ...props }) => {
    return (
        <div className='md-flex inline-block items-center'
            style={{ justifyContent: 'center' }}>
            <BstLogo />
            <div
                className='mt2 mb2 md-hide lg-hide'
                style={{
                    borderBottom: '1px solid #ccc',
                    width: '200px'
                }}
            />
            <div
                className='mr2 ml2 xs-hide sm-hide'
                style={{
                    borderRight: '1px solid #ccc',
                    height: '80px'
                }}
            />
            <Logo medium />
        </div>
    )
}

export default AboutBranding

