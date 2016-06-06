import React from 'react'
import { ButtonOutline } from 'rebass'


export const CheckOrSchedule = ({onDecline, onAccept, ...props}) => {
    return (
        <div>
            <h2>
                Ready to grow your business? Find out of Bond Street is right for you
            </h2>
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
        </div>
    )
}

export default CheckOrSchedule
