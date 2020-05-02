import React, { useState } from 'react'
import { login, register, logout } from '../../redux/actions'
import { useDispatch } from "react-redux";


const Logic = () => {
    const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value })
    const [state, setState] = useState({
        email: '',
        password: '',
        password2: ''
    })
    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login(state))
    }

    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(register(state))
    }

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    let loginValidator = state.email.length < 3 || state.password.length < 6
    let registerValidator = state.email.length < 3 || state.password.length < 6 || state.password !== state.password2


    return { handleChange, handleLogin, handleRegister, handleLogout, state, loginValidator, registerValidator }


}

export default Logic