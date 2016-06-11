
import React from 'react'
import Scroll from 'react-scroll'
import { Button } from 'rebass'
import Container from './Container'

const LandingQuote = (props, { data }) => {
    const { quote } = data.landing

    return (
        <Scroll.Element
            name='intro'
            id='intro'
            className='min-height-100 table col-12 px2 py4 white bg-black'>
            <section className='table-cell align-middle center'>
                <Container>
                    <blockquote className='p0'>
                        <p className='bold line-height-1 h1 md-h0 lg-h00 mb2'
                            dangerouslySetInnerHTML={{ __html: quote.text }} />
                        <cite>{quote.source}</cite>
                    </blockquote>
                </Container>
            </section>
        </Scroll.Element>
    )
}

LandingQuote.contextTypes = {
    data: React.PropTypes.object
}

export default LandingQuote

