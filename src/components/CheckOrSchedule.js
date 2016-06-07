
import React from 'react'
import { ButtonOutline } from 'rebass'


export const CheckOrSchedule = ({onDecline, onAccept, ...props}) => {
    return (
        <div>
            <ButtonOutline
                id='qlm-1-not-interested'
                m={1}
                href='/apply/'
                onClick={onDecline}>
                Check my rate
            </ButtonOutline>
            <ButtonOutline
                id='qlm-1-interested'
                m={1}
                onClick={onAccept}>
                Schedule a free consultation
            </ButtonOutline>
        </div>
    )
}

export default CheckOrSchedule
