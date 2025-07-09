import React, { useContext } from 'react'
import { AuthConext } from '../../auth'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthConext)

    const { pathname, search } = useLocation();

    const lastPath = pathname + search
    localStorage.setItem('lastPath', lastPath)

    return (logged)
        ? children
        : <Navigate to='/login' />
}
