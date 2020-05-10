import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import { getUser } from './redux/actions'
import Login from './containers/auth/loginModal'
import Spinner from './containers/spinner/spinner'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authenticated = useSelector(state => state.user.authenticated)
    const loading = useSelector(state => state.user.loading)
    const dispatch = useDispatch()

    // useEffect(() => isValidUser(), [])

    useEffect(() => {
        const isValidUser = async () => await dispatch(getUser())

        isValidUser()
    }, []);

    if (loading) return <Spinner></Spinner>
    if (authenticated) return <Route {...rest} render={props => <Component {...props} />} />;
    else return <Login open={true}></Login>
}

export default PrivateRoute

