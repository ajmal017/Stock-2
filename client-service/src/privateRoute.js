import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import { getUser } from './redux/actions'
import Login from './containers/auth/loginModal'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authenticated = useSelector(state => state.user.authenticated)
    const dispatch = useDispatch()
    const isValidUser = () => dispatch(getUser())

    useEffect(() => isValidUser(), [])

    if (authenticated) return <Route {...rest} render={props => <Component {...props} />} />;
    else return <Login open={true}></Login>
}

export default PrivateRoute

