
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
        this.refs.root.appendChild(link)
    }

    refresh () {
        if (typeof twttr !== 'undefined') {
            twttr.widgets.load(this.refs.root)
        }
        if (typeof FB !== 'undefined') {
            FB.XFBML.parse(this.refs.root)
        }
    }

    render () {
        return (
            <div ref='root'>
                <div className='fb-follow'
                    data-href='https://www.facebook.com/onbondstreet'
                    data-layout='button_count'
                    data-show-faces='false'></div>
                {/*
                <a className='twitter-follow-button'
                    data-show-count='false'
                    href='https://twitter.com/onbondstreet'>Follow @onbondstreet</a>
                    */}
            </div>
        )
    }
}

export default FollowButtons

