import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import Stock from './pages/Stock'
import Portfolio from './pages/Portfolio'
import Options from './pages/Options'

const BaseRouter = () => (
    < Switch >
        <Route exact path='/' component={Portfolio}></Route>
        <Route exact path='/stocks' component={Stock} />
        <Route exact path='/options' component={Options} />
    </Switch >
)

export default BaseRouter