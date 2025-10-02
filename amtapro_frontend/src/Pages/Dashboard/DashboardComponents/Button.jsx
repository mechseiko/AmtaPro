import React from 'react';

const Button = ({text}) => {
    return (
        <>
        {text && <button 
            className="p-3 m-3 bg-primary hover:bg-foreground hover:text-primary rounded-sm transition-colors"
        >
            {text}
        </button>}
        </>
    );
}

export default Button;