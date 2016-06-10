
import React from 'react'
import Scroll from 'react-scroll'
import { Button } from 'rebass'
import Container from './Container'

const LandingIntro = (props, { data }) => {
    const { introSection } = data.landing

    return (
        <Scroll.Element
            name='intro'
            id='intro'
            className='min-height-100 table col-12 px2 py4'>
            <section className='table-cell align-middle center'>
                <Container>
                    <p className='bold h3 md-h2'
                        dangerouslySetInnerHTML={{ __html:introSection.text }} />
                    <div className='xs-hide'>
                        <Button
                            is={Scroll.Link}
                            smooth={true}
                            duration={200}
                            offset={-64}
                            to='stories'
                            mt={3}
                            color='white'
                            backgroundColor='black'
                            children='Stories' />
                    </div>
                </Container>
            </section>
        </Scroll.Element>
    )
}

LandingIntro.contextTypes = {
    data: React.PropTypes.object
}

export default LandingIntro

