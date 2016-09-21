
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
        <footer className='py2 white bg-black'>
            <div className='inline-block col-12 md-col-9'>
                <div class='row'>
                    <img className='mx2'
                        src='https://bondstreet.com/bst_static/foyer/images/logo_txt_white_2x.png'
                        alt='Bond Street logo'
                        width='164'
                        height='16' />
                </div>
                <div class='row'>
                    <p className='h6 bold caps inline-block mx2 my1'
                        children={footer.text} />
                    {footer.links.map((link, i) => (
                        <NavItem small key={i} {...link} />
                    ))}
                </div>
            </div>
            <div className='inline-block col-12 md-col-3 py2 md-right-align'>
                <Icon
                    className='mx2'
                    size={24}
                    href='https://facebook.com/onbondstreet'
                    name='facebook' />
                <Icon
                    className='mx2'
                    size={24}
                    href='https://twitter.com/onbondstreet'
                    name='twitter' />
            </div>
        </footer>
    )
}

Footer.contextTypes = {
    data: React.PropTypes.object
}

export default Footer

