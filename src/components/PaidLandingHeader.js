
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

        const sx = {
            root: {
                paddingTop: 64
            }
        }

        return (
            <Scroll.Element
                name='top'
                id='top'
                className='table col-12 min-height-100 px3 py4 bg-mint'>
                <header
                    style={sx.root}
                    className='table-cell col-12 align-middle'>
                    <Container
                        py={4}
                        style={{
                            maxWidth: 1024 // 768
                        }}>
                        <div className='center'>
                            <Heading
                                className='mb3'
                                children={bondstreet.heading}/>
                        </div>
                        <Text center
                              className='max-width-2 mx-auto'
                              dangerouslySetInnerHTML={{ __html: bondstreet.subHeading }}
                        />
                    </Container>
                    <Container py={3}>
                        <ValuePropsTable dark />

                        <div className='center max-width-3 mx-auto mt4'>
                            <Text center
                                  className='mb2'
                                  dangerouslySetInnerHTML={{ __html: bondstreet.cta }}
                            />
                            <Button
                                id='paid-header-cta-button'
                                color='white'
                                backgroundColor='black'
                                children={bondstreet.ctaButton}
                                onClick={openModal}
                            />
                        </div>
                    </Container>
                </header>
            </Scroll.Element>
        )
    }
}

PaidLandingHeader.contextTypes = {
    data: React.PropTypes.object,
    modal: React.PropTypes.object
}

export default PaidLandingHeader

