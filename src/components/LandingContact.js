
import React from 'react'
import { Container, Text } from 'rebass'
import Scroll from 'react-scroll'
import classnames from 'classnames'

import Heading from './Heading'
import LeadForm from './LeadForm'

const LandingContact = (props) => {
    const cx = classnames('table col-12 px3 py4 white bg-black', {
        'min-height-100': props.fullHeight,
    })

    return (
        <Scroll.Element
            name='contact'
            id='contact'
            className={cx}>
            <div className='table-cell col-12 center align-middle'>
                <Container
                    py={3}
                    style={{
                        maxWidth: 640
                    }}>
                    <LeadForm instanceName='fornyc__landing_contact' initialView={props.initialView} />
                </Container>
            </div>
        </Scroll.Element>
    )
}

LandingContact.propTypes = {
    fullHeight: React.PropTypes.bool,
    initialView: React.PropTypes.string
}

LandingContact.defaultProps = {
    initialView: 'interested'
}

export default LandingContact

