
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './components/Root'

const div = document.getElementById('app')

const initialData = JSON.parse(document.getElementById('data').innerHTML)

ReactDOM.render(
    <AppContainer>
        <Root data={initialData} />
    </AppContainer>,
    div
)

if (module.hot) {
    module.hot.accept('./components/Root', () => {
        const NextRoot = require('./components/Root').default
        ReactDOM.render(
            <AppContainer>
                <NextRoot data={initialData} />
            </AppContainer>,
            div
        )
    })
}

