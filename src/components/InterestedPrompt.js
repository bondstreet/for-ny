import React from 'react'
import { Heading, ButtonOutline } from 'rebass'

export const InterestedPrompt = ({ onDecline, onAccept, ...props }) => {
    return (
        <div>
            <Heading mb={2}>
                Are you a small business owner?
            </Heading>
            <div>
                <ButtonOutline m={1} onClick={onDecline}>
                    No
                </ButtonOutline>
                <ButtonOutline m={1} onClick={onAccept}>
                    Yes
                </ButtonOutline>
            </div>
        </div>
    )
}

export default InterestedPrompt
