import React from 'react'
import { Button} from 'rebass'


export const CheckOrSchedule = ({onNotReadyClick, onAccept, ...props}) => {
    return (
        <div>
            <h2>
                Ready to grow your business? Find out of Bond Street is right for you
            </h2>
            <div>
                <Button outline>
                    <a href='/apply/'>Check my rate</a>
                </Button>
                <Button
                    onClick={onAccept}>
                    Schedule a free consultation
                </Button>
            </div>
            <button onClick={onNotReadyClick}>No thanks, I'm not ready quite yet but would like to stay in touch</button>
        </div>
    )
}

export default CheckOrSchedule
