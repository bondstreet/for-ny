
import React from 'react'
import { Container, Button } from 'rebass'
import Scroll from 'react-scroll'
import Heading from './Heading'
import Text from './Text'
import ValuePropsTable from './ValuePropsTable'
import AboutLogos from './AboutLogos'

class PaidLandingHeader extends React.Component {
    constructor(props) {
        super()
    }

    render () {
        const { bondstreet } = this.context.data.paidLanding
        const { openModal } = this.context.modal


        return (
            <Scroll.Element
                name='top'
                id='top'
                className='table col-12 min-height-100 px3 py4 bg-mint'>
                <div className='table-cell col-12 align-middle'>
                    <Container
                        py={3}
                        style={{
                            maxWidth: 768
                        }}>
                        <div className='center'>
                            <Heading
                                className='mb3'
                                children={bondstreet.heading}/>
                        </div>
                        <Text center
                              className='mb4'
                              dangerouslySetInnerHTML={{ __html: bondstreet.subHeading }}
                        />
                        <ValuePropsTable />

                        <div className='center'>
                            <Text center
                                  className='mb4'
                                  dangerouslySetInnerHTML={{ __html: bondstreet.cta }}
                            />
                            <Button
                                color='white'
                                backgroundColor='black'
                                children={bondstreet.ctaButton}
                                onClick={openModal}
                            />
                        </div>
                    </Container>
                </div>
            </Scroll.Element>
        )
    }
}

PaidLandingHeader.contextTypes = {
    data: React.PropTypes.object,
    modal: React.PropTypes.object
}

export default PaidLandingHeader

