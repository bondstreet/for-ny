import React from 'react'
import { Button } from 'rebass'

export const LikeUs = ({...props}) => {
    return (
        <div>
            <h2>
                Like stories about businesses in the city?<br />
            </h2>
            <Button><a target='_blank' href='https://facebook.com/onbondstreet'>Follow us on Facebook</a></Button>
        </div>
    )
}

export default LikeUs
