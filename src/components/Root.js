
import React from 'react'
import {
    RouterContext,
    Router,
    applyRouterMiddleware,
    browserHistory
} from 'react-router'
import useScroll from 'react-router-scroll'
import routes from '../routes'
import Provider from './Provider'
import {logPageView} from '../tracking'

const Root = ({ data, renderProps }) => {
    const routerComponent = renderProps
        ? <RouterContext {...renderProps} />
        : <Router history={browserHistory}
            routes={routes}
            onUpdate={logPageView}
            render={applyRouterMiddleware(useScroll())} />

	return (
        <Provider data={data}>
            {routerComponent}
        </Provider>
	)
}

export default Root

