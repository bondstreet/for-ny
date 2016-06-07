
import React from 'react'
import { ButtonOutline } from 'rebass'


export const CheckOrSchedule = ({onNotReadyClick, onAccept, ...props}) => {
    return (
        <div>
            <ButtonOutline
                id='qlm-1-not-interested'
                m={1}
                href='/apply/'>
                Check my rate
            </ButtonOutline>
            <ButtonOutline
                id='qlm-1-interested'
                m={1}
                onClick={onAccept}>
                Schedule a free consultation
            </ButtonOutline>
            <button onClick={onNotReadyClick}>No thanks, I’m not ready quite yet but would like to stay in touch</button>
        </div>
    )
}

export default CheckOrSchedule
