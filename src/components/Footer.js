
import React from 'react'
import Text from './Text'
import NavItem from './NavItem'
import Icon from './Icon'

const Footer = (props, {
    data: {
        footer
    }
}) => {
    return (
        <footer className='px2 py2'>
            <div className='inline-block col-12 sm-col-6'>
                {footer.links.map((link, i) => (
                    <NavItem key={i} {...link} />
                ))}
            </div>
            <div className='inline-block col-12 sm-col-6 right-align'>
                <Icon
                    className='mx2'
                    size={24}
                    href='https://facebook.com/onbondstreet'
                    name='facebook' />
                <Icon
                    className='mx2'
                    size={24}
                    href='https://facebook.com/onbondstreet'
                    name='twitter' />
            </div>
            <Text
                bold={false}
                size={6}
                className='inline-block px2 mr2'
                children={footer.text} />
        </footer>
    )
}

Footer.contextTypes = {
    data: React.PropTypes.object
}

export default Footer

