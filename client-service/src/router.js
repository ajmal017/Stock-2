import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './containers/layout'
import PrivateRoute from './privateRoute'
import Portfolio from './containers/portfolio/layout'

const BaseRouter = () => (
    < Switch >
        <Route exact path='/' component={LandingPage} ></Route>
        <PrivateRoute exact path='/portfolio' component={Portfolio}></PrivateRoute>
    </Switch >
)

export default BaseRouter