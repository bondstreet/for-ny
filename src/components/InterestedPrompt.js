
import React from 'react'
import { Button, ButtonOutline } from 'rebass'

export const InterestedPrompt = ({ onDecline, onAccept, ...props }) => {
    return (
        <div>
            <ButtonOutline m={1} onClick={onDecline}>
                No
            </ButtonOutline>
            <Button m={1}
                color='black'
                backgroundColor='white'
                onClick={onAccept}>
                Yes
            </Button>
        </div>
    )
}

export default InterestedPrompt
