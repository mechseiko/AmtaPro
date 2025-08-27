import React from 'react';

const Title = ({title}) => {
    return (
        <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center mb-5">
                {title}
            </h1>
        </div>
    );
}

export default Title;