import React from 'react'
import { ButtonOutline } from 'rebass'

export const LikeUs = ({ ...props }) => {
    return (
        <div>
            <ButtonOutline
                target='_blank'
                href='https://facebook.com/onbondstreet'>
                Follow us on Facebook
            </ButtonOutline>
        </div>
    )
}

export default LikeUs
