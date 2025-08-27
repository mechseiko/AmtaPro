import React from 'react';
import {Link} from 'react-router-dom'
import {login} from '../assets/dashboardLinks'

const Logout = () => {

    return (
        <>
            <Link to={login}><button 
                className="p-2 m-1 md:p-2 md:m-2 bg-muted hover:bg-foreground text-white rounded-lg transition-colors"
            >
                Logout
            </button></Link>
        </>
    );
}

export default Logout;