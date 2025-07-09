import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthConext } from '../context/AuthConext';

export const LoginPage = () => {

    const { login } = useContext(AuthConext)
    const navigate = useNavigate();




    const onLogin = () => {
        // para que recuerde la ultima pagina donde estuvo

        //
        login('Edgar Guzman')
        //navigate('/dc', { replace: true })
    }


    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />
            <button
                onClick={onLogin}
                className='btn btn-primary'>Login</button>
        </div>
    )
}
