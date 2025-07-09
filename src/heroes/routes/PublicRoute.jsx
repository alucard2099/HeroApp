import React, { useContext } from 'react'
import { AuthConext } from '../../auth'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthConext)

    const lastPath = localStorage.getItem('lastPath') || '/'

    return (!logged)
        ? children
        : <Navigate to={lastPath}></Navigate>
}
