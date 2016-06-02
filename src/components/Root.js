
import React from 'react'
import { RouterContext, Router, browserHistory } from 'react-router'
import routes from '../routes'
import Provider from './Provider'

const Root = ({ data, renderProps }) => {
    const routerComponent = renderProps
        ? <RouterContext {...renderProps} />
        : <Router history={browserHistory} routes={routes} />

	return (
        <Provider data={data}>
            {routerComponent}
        </Provider>
	)
}

export default Root

