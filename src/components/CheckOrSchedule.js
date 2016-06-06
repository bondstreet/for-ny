import React from 'react'
import { Button} from 'rebass'


export const CheckOrSchedule = ({onDecline, onAccept, ...props}) => {
    return (
        <div>
            <h2>
                Ready to grow your business? Find out of Bond Street is right for you
            </h2>
            <div>
                <Button outline
                    id='qlm-1-not-interested'
                    onClick={onDecline}>
                    <a href='/apply/'>Check my rate</a>
                </Button>
                <Button
                    id='qlm-1-interested'
                    onClick={onAccept}>
                    Schedule a free consultation
                </Button>
            </div>
        </div>
    )
}

export default CheckOrSchedule
