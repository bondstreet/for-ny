
import React from 'react'

class FollowButtons extends React.Component {
    constructor () {
        super()
        this.refresh = this.refresh.bind(this)
        this.createFollowButton = this.createFollowButton.bind(this)
    }

    componentDidMount () {
        this.createFollowButton()
        this.refresh()
    }

    componentDidUpdate () {
        this.refresh()
    }

    createFollowButton () {
        const link = document.createElement('a')
        link.className = 'twitter-follow-button'
        link.setAttribute('data-show-count', false)
        link.href = 'https://twitter.com/onbondstreet'
        link.textContent = 'Follow @onbondstreet'
        this.refs.twitter.appendChild(link)
    }

    refresh () {
        if (typeof twttr !== 'undefined') {
            twttr.widgets.load(this.refs.twitter)
        }
        if (typeof FB !== 'undefined') {
            FB.XFBML.parse(this.refs.facebook)
        }
    }

    render () {
        return (
            <div ref='root'>
                <div ref='facebook'>
                    <div className='fb-follow'
                        data-href='https://www.facebook.com/onbondstreet'
                        data-layout='button_count'
                        data-show-faces='false'></div>
                </div>
                <div ref='twitter' />
            </div>
        )
    }
}

export default FollowButtons

