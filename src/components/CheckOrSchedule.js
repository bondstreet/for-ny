
import React from 'react'
import { ButtonOutline } from 'rebass'


export const CheckOrSchedule = ({onNotReadyClick, onAccept, ...props}) => {
    return (
        <div>
            <ButtonOutline
                m={1}
                target='_blank'
                href='/apply/'>
                Check my rate
            </ButtonOutline>
            <ButtonOutline
                m={1}
                onClick={onAccept}>
                Schedule a call
            </ButtonOutline>
            <button
                style={{
                    background: 'transparent',
                    color: 'inherit',
                    textDecoration: 'underline',
                    border: 'none',
                    fontSize: '16px',
                    marginTop: '10px'
                }}
                onClick={onNotReadyClick}>No thanks, I’m not ready quite yet but would like to stay in touch</button>
        </div>
    )
}

export default CheckOrSchedule
