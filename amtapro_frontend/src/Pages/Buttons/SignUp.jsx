import React from 'react';
import {Link} from 'react-router-dom'
import {register} from '../../assets/links'

const SignUp = () => {

    return (
        <>
            <Link to={register}><button 
                className="p-2 m-1 md:p-2 md:m-2 bg-primary hover:bg-foreground hover:text-primary rounded-lg transition-colors"            >
                Sign Up
            </button></Link>
        </>
    );
}

export default SignUp;