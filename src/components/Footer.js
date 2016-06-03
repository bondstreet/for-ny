
import React from 'react'
import Text from './Text'
import NavItem from './NavItem'
import SocialIcon from './SocialIcon'

const Footer = (props, {
    data: {
        footer
    }
}) => {
    return (
        <footer className='px2 py2 bg-green'>
            <div className='inline-block col-12 sm-col-6'>
                <Text
                    bold
                    caps
                    size={5}
                    className='inline-block px2 mr2'
                    children={footer.text} />
                {footer.links.map((link, i) => (
                    <NavItem key={i} {...link} />
                ))}
            </div>
            <div className='inline-block col-12 sm-col-6 right-align'>
                <SocialIcon
                    className='mx2'
                    href='https://facebook.com/onbondstreet'
                    brand='facebook' />
                <SocialIcon
                    className='mx2'
                    href='https://facebook.com/onbondstreet'
                    brand='twitter' />
            </div>
        </footer>
    )
}

Footer.contextTypes = {
    data: React.PropTypes.object
}

export default Footer

