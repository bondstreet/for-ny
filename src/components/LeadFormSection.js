
import React from 'react'
import { Container } from 'rebass'
import LeadForm from './LeadForm'

const LeadFormSection = () => {
    return (
        <Container
            style={{ maxWidth: 768 }}
            px={3}
            py={4}>
            <LeadForm />
        </Container>
    )
}

export default LeadFormSection

