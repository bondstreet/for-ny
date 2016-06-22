
import React from 'react'

class FollowButtons extends React.Component {
    constructor(props) {
        super()
        this.createDiv = this.createDiv.bind(this)
        this.initButtons = this.initButtons.bind(this)
    }

    componentDidMount() {
        console.log('follow mount')
        this.createDiv()
        this.initButtons()
    }

    componentDidUpdate() {
        console.log('follow update')
        this.createDiv()
        this.initButtons()
    }

    initButtons() {
        if (typeof addthis !== 'undefined') {
            addthis.layers.refresh()
        }
    }

    createDiv () {
        var wrap = this.refs.root
        while(wrap.firstChild) wrap.removeChild(wrap.firstChild)

        const div = document.createElement('div')
        div.className = 'addthis_horizontal_follow_toolbox'
        this.refs.root.appendChild(div)
    }

    render() {
        return (
            <div ref='root' />
        )
    }
}

export default FollowButtons
