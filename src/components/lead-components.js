import React from 'react'


// Container components
export const InterestedPrompt = ({ onDecline, onAccept, ...props }) => {
    return (
        <div>
            <h2>
                Are you a small business owner?
            </h2>
            <div>
                <button outline
                    id='qlm-1-not-interested'
                    onClick={onDecline}>
                    No
                </button>
                <button
                    id='qlm-1-interested'
                    onClick={onAccept}>
                    Yes
                </button>
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
                <button outline
                    id='qlm-1-not-interested'
                    onClick={onDecline}>
                    <a href='/apply/'>Check my rate</a>
                </button>
                <button
                    id='qlm-1-interested'
                    onClick={onAccept}>
                    Schedule a free consultation
                </button>
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
            <p>Share your contact info and we’ll be in touch.</p>
            <form id='qlm-lead-form' onSubmit={onSubmit}>
                <input
                    className='block'
                    value={business_name}
                    onInput={onChange}
                    type='text'
                    name='business_name'
                    required />
                <input
                    className='block'
                    value={name}
                    onInput={onChange}
                    type='text'
                    name='name'
                    required />
                <input
                    className='block'
                    value={phone_number}
                    onInput={onChange}
                    type='text'
                    name='phone_number'
                    required />
                <input
                    className='block'
                    value={email}
                    onInput={onChange}
                    type='email'
                    name='email'
                    required />
                <button type='submit'>Submit</button>
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
            <button>Click to schedule a call</button>
        </div>
    )
}


export const LikeUs = ({...props}) => {
    return (
        <div>
            <h2>
                Like stories about businesses in the city?<br />
            </h2>
            <button><a target='_blank' href='https://facebook.com/onbondstreet'>Follow us on Facebook</a></button>
        </div>
    )
}
