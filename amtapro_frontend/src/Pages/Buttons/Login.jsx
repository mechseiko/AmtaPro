import React from 'react';
import {Link} from 'react-router-dom'
import {login} from '../../assets/links'

const Login = () => {

    return (
        <>
            <Link to={login}><button 
                className="p-1 m-1 md:p-2 md:m-2 text-foreground border-2 border-primary hover:bg-foreground hover:text-primary hover:border-foreground rounded-lg transition-colors"
            >
                Login
            </button></Link>
        </>
    );
}

export default Login;