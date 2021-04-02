import React from 'react';
import {Redirect} from 'react-router-dom';

const LoginPage = ({isLogged, onLogin}) => {
    if (isLogged) {
        return <Redirect to='/'/>
    }

    return (
        <div className='jumbotron'>
            <p>Loggin to see secret page</p>
            <button
                className='btn btn-primary'
                onClick={onLogin}
            >
            Login
            </button>
        </div>
    )
}

export default LoginPage;