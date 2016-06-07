
import React from 'react'
import { ButtonOutline } from 'rebass'

export const InterestedPrompt = ({ onDecline, onAccept, ...props }) => {
    return (
        <div>
            <ButtonOutline m={1} onClick={onDecline}>
                No
            </ButtonOutline>
            <ButtonOutline m={1} onClick={onAccept}>
                Yes
            </ButtonOutline>
        </div>
    )
}

export default InterestedPrompt
