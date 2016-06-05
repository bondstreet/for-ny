import React from 'react'
import { Input, Button, Label } from 'rebass'


// Container components
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


export const LeadCapture = ({
    onSubmit,
    onChange,
    business_name,
    name,
    email,
    phone_number,
    ...props
}) => {
    return (
        <div>
            <h2>
                Great!<br />First we need to know a little about you.
            </h2>
            <p className='mb2'>Share your contact info and we’ll be in touch.</p>
            <form id='qlm-lead-form' onSubmit={onSubmit} className='left-align'>
                <Label>Business Name</Label>
                <Input
                    className='block'
                    value={business_name}
                    onInput={onChange}
                    type='text'
                    name='business_name'
                    required />
                <Input
                    className='block'
                    value={name}
                    onInput={onChange}
                    type='text'
                    name='name'
                    required />
                <Input
                    label=''
                    className='block'
                    value={phone_number}
                    onInput={onChange}
                    type='text'
                    name='phone_number'
                    required />
                <Input
                    className='block'
                    value={email}
                    onInput={onChange}
                    type='email'
                    name='email'
                    required />
                <Button className='center' type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export const Schedule = ({...props}) => {
    return (
        <div>
            <h2>
                Great!<br />First we need to know a little about you.
            </h2>
            <Button>Click to schedule a call</Button>
        </div>
    )
}


export const LikeUs = ({...props}) => {
    return (
        <div>
            <h2>
                Like stories about businesses in the city?<br />
            </h2>
            <Button><a target='_blank' href='https://facebook.com/onbondstreet'>Follow us on Facebook</a></Button>
        </div>
    )
}
