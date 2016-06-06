import React from 'react'
import { Button } from 'rebass'

export const InterestedPrompt = ({ onDecline, onAccept, ...props }) => {
    return (
        <div>
            <h2>
                Are you a small business owner?
            </h2>
            <div>
                <Button
                    onClick={onDecline}>
                    No
                </Button>
                <Button
                    onClick={onAccept}>
                    Yes
                </Button>
            </div>
        </div>
    )
}

export default InterestedPrompt
