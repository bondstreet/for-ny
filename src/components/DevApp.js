
// For development only

import React from 'react'
import { Router, browserHistory } from 'react-router'
import routes from '../routes'
import Provider from './Provider'

const DevApp = (props) => {
	return (
		<Provider data={props.data}>
			<Router
				history={browserHistory}
				routes={routes} />
		</Provider>
	)
}

export default DevApp

