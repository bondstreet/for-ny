
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import DevApp from './components/DevApp'

const div = document.getElementById('app')

const initialData = JSON.parse(document.getElementById('data').innerHTML)
console.log('dev')

ReactDOM.render(
    <AppContainer>
        <DevApp data={initialData} />
    </AppContainer>,
    div
)

if (module.hot) {
	module.hot.accept('./components/DevApp', () => {
		const NextApp = require('./components/DevApp').default
		ReactDOM.render(
			<AppContainer>
				<NextApp data={initialData} />
			</AppContainer>,
			div
		)
	})
}

