
import React from 'react'
import { ButtonOutline, Input } from 'rebass'

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
                <ButtonOutline id='lead-form-submit' type='submit'>Submit</ButtonOutline>
            </form>
        </div>
    )
}

export default LeadCapture
