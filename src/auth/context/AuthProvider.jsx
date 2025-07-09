
import React, { useReducer } from 'react'
import { AuthConext } from './AuthConext'
import { authReducer } from './authReducer'
import { types } from '../types/types'


const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return {
        logged: !!user,
        user
    }
}

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, {}, init)

    const login = (name = '') => {
        const user = { id: "Abc", name, }
        const action = { type: types.login, payload: user }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(action)
    }

    const logOut = () => {
        localStorage.removeItem('user')
        const action = { type: types.logout }
        dispatch(action)
    }

    return (
        <AuthConext.Provider value={{ ...state, login, logOut }}>
            {children}
        </AuthConext.Provider>
    )
}
