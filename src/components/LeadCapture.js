import React from 'react'
import { ButtonOutline, Button, Input } from 'rebass'

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
                <Input
                    label='Business Name'
                    value={business_name}
                    onChange={onChange}
                    name='business_name'
                    required />
                <Input
                    label='Name'
                    value={name}
                    onChange={onChange}
                    name='name'
                    required />
                <Input
                    label='Phone Number'
                    className='block'
                    value={phone_number}
                    onChange={onChange}
                    name='phone_number'
                    required />
                <Input
                    label='Email'
                    value={email}
                    onChange={onChange}
                    type='email'
                    name='email'
                    required />
                <ButtonOutline type='submit'>Submit</ButtonOutline>
            </form>
        </div>
    )
}

export default LeadCapture
